const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const http = require('http');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// create HTTP server and attach Socket.IO later
const server = http.createServer(app);
let io = null;

// session (very small/simple setup). Set ADMIN_USER / ADMIN_PASS in env to change credentials.
app.use(session({
  secret: process.env.SESSION_SECRET || 'change_this_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 8 }
}));

function isAuthenticated(req, res, next){
  if (req.session && req.session.authenticated) return next();
  // respond JSON for XHR or redirect to login
  if (req.accepts('html')) return res.redirect('/login');
  return res.status(401).json({ message: 'Unauthorized' });
}

// Root -> serve index.html trực tiếp (protected)
app.get('/', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Hỗ trợ đường dẫn /order nếu còn gọi từ client (protected)
app.get('/order', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// simple login page (unprotected)
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// POST /login -> set session
app.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  const ADMIN_USER = process.env.ADMIN_USER || 'nhahanglongchuyen';
  const ADMIN_PASS = process.env.ADMIN_PASS || '19791980';
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    req.session.authenticated = true;
    return res.json({ ok: true, message: 'Đăng nhập thành công' });
  }
  return res.status(401).json({ ok: false, message: 'Sai thông tin đăng nhập' });
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

app.use(express.static(path.join(__dirname, '/')));

// attach Socket.IO when module loaded
try {
  const { Server } = require('socket.io');
  io = new Server(server, { cors: { origin: '*' } });

  io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    socket.on('order-update', (payload) => {
      // broadcast order updates to other connected clients
      socket.broadcast.emit('order-update', payload);
    });

    socket.on('disconnect', () => {
      // console.log('Socket disconnected:', socket.id);
    });
  });
} catch (e) {
  console.warn('Socket.IO not available:', e.message);
}

// Lưu hóa đơn
app.post('/save-invoice', isAuthenticated, (req, res) => {
  const bill = req.body;
  if (!bill || !bill.table || !bill.items || typeof bill.total === 'undefined') {
    return res.status(400).json({ message: 'Dữ liệu hóa đơn không hợp lệ' });
  }

  const invoiceFilePath = path.join(__dirname, 'invoices.json');
  // ensure invoice has timestamp for reports
  if (!bill.createdAt) {
    bill.createdAt = new Date().toISOString();
  }

  fs.readFile(invoiceFilePath, 'utf8', (readErr, data) => {
    let invoices = [];
    if (readErr) {
      if (readErr.code !== 'ENOENT') {
        return res.status(500).json({ message: 'Lỗi khi đọc file hóa đơn' });
      }
      // ENOENT -> file chưa tồn tại, sẽ tạo mới
    } else {
      try {
        invoices = JSON.parse(data || '[]');
      } catch (e) {
        return res.status(500).json({ message: 'Dữ liệu hóa đơn bị hỏng' });
      }
    }

    invoices.push(bill);

    fs.writeFile(invoiceFilePath, JSON.stringify(invoices, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ message: 'Lỗi khi lưu hóa đơn' });
      }
      // emit events to connected sockets so other clients can update
      try {
        if (io) {
          io.emit('invoice-saved', bill);
          io.emit('order-cleared', { table: bill.table });
        }
      } catch (e) { console.error('Socket emit failed', e); }

      return res.status(200).json({ message: 'Hóa đơn đã được lưu' });
    });
  });
});

// Helper to build range from type+date
function getRangeFromTypeAndDate(type, dateStr) {
  const d = dateStr ? new Date(dateStr) : new Date();
  if (type === 'daily') {
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
    return { start: start.toISOString(), end: end.toISOString() };
  }
  if (type === 'monthly') {
    const start = new Date(d.getFullYear(), d.getMonth(), 1);
    const end = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    return { start: start.toISOString(), end: end.toISOString() };
  }
  if (type === 'yearly') {
    const start = new Date(d.getFullYear(), 0, 1);
    const end = new Date(d.getFullYear() + 1, 0, 1);
    return { start: start.toISOString(), end: end.toISOString() };
  }
  return null;
}

// GET /reports?type=daily|monthly|yearly&date=YYYY-MM-DD OR /reports?start=&end=
app.get('/reports', isAuthenticated, (req, res) => {
  const { type, date, start, end } = req.query;
  let s = start, e = end;
  if (!s || !e) {
    if (!type) return res.status(400).json({ message: 'Thiếu type hoặc start/end' });
    const range = getRangeFromTypeAndDate(type, date);
    if (!range) return res.status(400).json({ message: 'Type không hợp lệ' });
    s = range.start; e = range.end;
  }

  const invoiceFilePath = path.join(__dirname, 'invoices.json');
  fs.readFile(invoiceFilePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') return res.json({ total: 0, count: 0, from: s, to: e });
      return res.status(500).json({ message: 'Không đọc được invoices.json' });
    }
    let invoices = [];
    try { invoices = JSON.parse(data || '[]'); } catch (e) { return res.status(500).json({ message: 'Dữ liệu hóa đơn sai' }); }

    const startTime = new Date(s).getTime();
    const endTime = new Date(e).getTime();

    const filtered = invoices.filter(inv => {
      if (!inv.createdAt) return false; // skip invoices without timestamp
      const t = new Date(inv.createdAt).getTime();
      return t >= startTime && t < endTime;
    });

    const total = filtered.reduce((sum, inv) => sum + (Number(inv.total) || 0), 0);
    const count = filtered.length;

    return res.json({ total, count, from: s, to: e });
  });
});

// Fallback
app.use((req, res) => {
  res.status(404).send('Not found');
});

server.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

// Admin: clear invoices file (backup then empty)
app.post('/clear-invoices', (req, res) => {
  const invoiceFilePath = path.join(__dirname, 'invoices.json');
  const backupPath = path.join(__dirname, `invoices.backup.${Date.now()}.json`);

  fs.readFile(invoiceFilePath, 'utf8', (err, data) => {
    // If file exists, back it up
    if (!err) {
      fs.writeFile(backupPath, data, 'utf8', (bwErr) => {
        if (bwErr) console.error('Backup invoices failed:', bwErr);
        // then truncate file
        fs.writeFile(invoiceFilePath, JSON.stringify([], null, 2), 'utf8', (wErr) => {
          if (wErr) return res.status(500).json({ message: 'Không thể xóa invoices.json' });
          return res.json({ message: 'Đã xóa invoices (backup tạo tại ' + path.basename(backupPath) + ')' });
        });
      });
    } else {
      // if file not found, create empty file
      if (err.code === 'ENOENT') {
        fs.writeFile(invoiceFilePath, JSON.stringify([], null, 2), 'utf8', (wErr) => {
          if (wErr) return res.status(500).json({ message: 'Không thể tạo invoices.json' });
          return res.json({ message: 'Invoices file đã được reset' });
        });
      } else {
        return res.status(500).json({ message: 'Lỗi khi truy cập invoices.json' });
      }
    }
  });
});