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
// in-memory registry of printer clients: socketId -> meta
const printers = new Map();

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

// allow printing either by session auth or by a shared print token in the request body
function allowPrintAuth(req, res, next){
  if (req.session && req.session.authenticated) return next();
  const token = req.body && (req.body.printToken || req.headers['x-print-token']);
  if (token && process.env.PRINT_TOKEN && token === process.env.PRINT_TOKEN) return next();
  // otherwise unauthorized
  return res.status(401).json({ message: 'Unauthorized (print token missing or invalid)' });
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

    socket.on('register-printer', (meta) => {
      try {
        printers.set(socket.id, meta || {});
        console.log('Printer registered:', socket.id, meta || {});
        socket.emit('printer-registered', { ok: true, id: socket.id, meta: meta || {} });
      } catch (e) { console.error('register-printer error', e); }
    });

    socket.on('unregister-printer', () => {
      try {
        printers.delete(socket.id);
        console.log('Printer unregistered:', socket.id);
        socket.emit('printer-unregistered', { ok: true });
      } catch (e) { console.error('unregister-printer error', e); }
    });

    socket.on('disconnect', () => {
      // cleanup
      printers.delete(socket.id);
      // console.log('Socket disconnected:', socket.id);
    });
  });
} catch (e) {
  console.warn('Socket.IO not available:', e.message);
}

// Lưu hóa đơn
app.post('/save-invoice', isAuthenticated, (req, res) => {
  const bill = req.body;
  console.log('POST /save-invoice called');
  try { console.log('bill summary:', { table: bill && bill.table, items: bill && bill.items && bill.items.length, total: bill && bill.total }); } catch(e){}
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
        console.error('Failed to write invoices.json:', writeErr);
        return res.status(500).json({ message: 'Lỗi khi lưu hóa đơn', detail: writeErr.message });
      }
      // emit events to connected sockets so other clients can update
      try {
        if (io) {
          io.emit('invoice-saved', bill);
          io.emit('order-cleared', { table: bill.table });
        }
      } catch (e) { console.error('Socket emit failed', e); }

      console.log('Invoice saved to', invoiceFilePath);
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

// Print endpoint: accept invoice data and print on server's connected printer
app.post('/print', isAuthenticated, (req, res) => {
  const data = req.body;
  if (!data || !data.table || !Array.isArray(data.items)) return res.status(400).json({ message: 'Dữ liệu in không hợp lệ' });

  // generate a simple PDF invoice using pdfkit and send to printer
  try {
    const PDFDocument = require('pdfkit');
    const { join } = require('path');
    const fs = require('fs');
    const tmpName = `invoice-print-${Date.now()}.pdf`;
    const outPath = path.join(__dirname, tmpName);

    const doc = new PDFDocument({ margin: 36 });
    const stream = fs.createWriteStream(outPath);
    doc.pipe(stream);

    doc.fontSize(18).text('Nhà Hàng Long Chuyên', { align: 'center' });
    doc.moveDown(0.5);
    doc.fontSize(12).text(`Hóa đơn - Bàn ${data.table}`, { align: 'left' });
    doc.text(`Thời gian: ${new Date().toLocaleString()}`);
    doc.moveDown(0.5);

    doc.fontSize(11);
    doc.text('Món', { continued: true }); doc.text('SL', { align: 'right', continued: true }); doc.text('Giá', { align: 'right' });
    doc.moveDown(0.25);

    let total = 0;
    data.items.forEach(it => {
      const line = (it.qty || 1) * (Number(it.price) || 0);
      total += line;
      doc.text(`${it.name}`, { continued: true });
      doc.text(`${it.qty || 1}`, { align: 'right', continued: true });
      doc.text(`${(Number(it.price) || 0).toLocaleString()} đ`, { align: 'right' });
    });

    doc.moveDown(0.5);
    doc.fontSize(13).text(`Tổng: ${total.toLocaleString()} đ`, { align: 'right' });

    doc.end();

    stream.on('finish', async () => {
      try {
        // send to printer using pdf-to-printer if available
        let printer = null;
        try { printer = require('pdf-to-printer'); } catch (e) { printer = null; }

        if (printer && typeof printer.print === 'function') {
          // optional: data.printerName to select specific printer
          const opts = {};
          if (data.printerName) opts.printer = data.printerName;
          await printer.print(outPath, opts);
          // remove temp file
          fs.unlink(outPath, () => {});
          return res.json({ ok: true, message: 'Lệnh in đã gửi tới máy in' });
        }

        // If pdf-to-printer not available, just return the PDF path for manual printing
        return res.json({ ok: true, message: 'PDF tạo thành công', file: tmpName });
      } catch (e) {
        console.error('Print error', e);
        return res.status(500).json({ message: 'Lỗi khi gửi lệnh in' });
      }
    });
  } catch (err) {
    console.error('Generate PDF failed', err);
    return res.status(500).json({ message: 'Không thể tạo file in' });
  }
});

// Remote-print endpoint: emit a print request to connected browser clients (e.g., PC browser)
// remote-print accepts either a logged-in session OR a valid print token
app.post('/remote-print', allowPrintAuth, (req, res) => {
  const data = req.body;
  if (!data || !data.table || !Array.isArray(data.items)) return res.status(400).json({ message: 'Dữ liệu in không hợp lệ' });

  try {
    // debug log: who requested remote-print (if available)
    try {
      const from = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
      console.log(`remote-print request from ${from} (hasSession=${!!(req.session && req.session.authenticated)}, hasToken=${!!(req.body && (req.body.printToken || req.headers['x-print-token']))}) for table=${data.table}`);
    } catch (e) { /* ignore */ }
    if (io) {
      // If any printers are registered, emit only to those sockets. Otherwise broadcast to all.
      if (printers.size > 0) {
        for (const sid of printers.keys()) {
          try { io.to(sid).emit('remote-print', data); } catch (e) { console.error('emit to printer failed', sid, e); }
        }
        console.log('Remote print event emitted to registered printers for table', data.table);
        return res.json({ ok: true, message: 'Đã gửi lệnh in tới máy in đã đăng ký' });
      }
      // fallback: broadcast to all connected clients
      io.emit('remote-print', data);
      console.log('Remote print event emitted (fallback broadcast) for table', data.table);
      return res.json({ ok: true, message: 'Đã gửi lệnh in tới các thiết bị kết nối (không có máy in đăng ký)' });
    }
    return res.status(500).json({ message: 'Socket server không khả dụng' });
  } catch (e) {
    console.error('remote-print error', e);
    return res.status(500).json({ message: 'Lỗi khi phát lệnh in' });
  }
});

// Debug endpoint to inspect registered printers
app.get('/printer-status', (req, res) => {
  try {
    const list = [];
    for (const [sid, meta] of printers.entries()) {
      list.push({ socketId: sid, meta });
    }
    return res.json({ count: list.length, printers: list });
  } catch (e) {
    console.error('printer-status error', e);
    return res.status(500).json({ message: 'Không thể lấy trạng thái máy in' });
  }
});