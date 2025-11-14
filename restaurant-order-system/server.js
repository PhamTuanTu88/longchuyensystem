/*

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// ===============================================
// BƯỚC 1: QUAN TRỌNG - Thêm middleware để xử lý JSON body
// Khi client gửi dữ liệu JSON (như hóa đơn), middleware này sẽ phân tích nó
app.use(express.json()); 
// ===============================================

// Cấu hình để Express phục vụ các file tĩnh từ thư mục HIỆN TẠI (nơi server.js đang chạy)
// Thay vì dùng 'restaurant-order-system', chỉ dùng __dirname
app.use(express.static(path.join(__dirname, '/')));

// Route chính để hiển thị file index.html
app.get('/', (req, res) => {
    // Chỉ cần tham chiếu index.html trong thư mục hiện tại
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API lưu hóa đơn
app.post('/save-invoice', (req, res) => {
  const bill = req.body;

  if (!bill.table || !bill.items || !bill.total) {
    return res.status(400).send({ message: 'Dữ liệu hóa đơn không hợp lệ' });
  }

  // Đọc file hóa đơn hiện tại
  const invoiceFilePath = path.join(__dirname, 'invoices.json');
  fs.readFile(invoiceFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Lỗi khi đọc file hóa đơn' });
    }

    let invoices = [];
    if (data) {
      invoices = JSON.parse(data);  // Nếu có dữ liệu hóa đơn, parse chúng
    }

    // Thêm hóa đơn mới vào danh sách
    invoices.push(bill);

    // Lưu lại các hóa đơn vào file JSON
    fs.writeFile(invoiceFilePath, JSON.stringify(invoices, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).send({ message: 'Lỗi khi lưu hóa đơn' });
      }

      res.status(200).send({ message: 'Hóa đơn đã được lưu' });
    });
  });
});
// Cấu hình server chạy trên port 3000
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});


*/


const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// Middleware để xử lý dữ liệu JSON và cookie
app.use(express.json());
app.use(cookieParser()); // Dùng cookie-parser để quản lý cookies

// Cấu hình Express phục vụ các file tĩnh
app.use(express.static(path.join(__dirname, '/')));

// Route chính để luôn hiển thị trang login.html
app.get('/', (req, res) => {
  // 1. Kiểm tra cookie "loggedIn"
  if (req.cookies.loggedIn) {
    // Nếu ĐÃ ĐĂNG NHẬP, chuyển hướng ngay lập tức đến trang order (index.html)
    return res.redirect('/order');
  }
  
  // 2. Nếu CHƯA ĐĂNG NHẬP, hiển thị trang đăng nhập
  res.sendFile(path.join(__dirname, 'login.html'));
});

// API xử lý đăng nhập (Không đổi so với hướng dẫn trước)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const validUsername = 'user';
  const validPassword = '12345';

  if (username === validUsername && password === validPassword) {
    // Lưu cookie khi đăng nhập thành công
    res.cookie('loggedIn', true, { maxAge: 3600000, httpOnly: true });
    // Trả về 200 OK. Client sẽ nhận thấy thành công và tự chuyển hướng.
    return res.status(200).send({ message: 'Đăng nhập thành công!' }); 
  } else {
    res.status(400).send({ message: 'Tên đăng nhập hoặc mật khẩu không đúng!' });
  }
});

// Route /order (Không đổi so với hướng dẫn trước)
app.get('/order', (req, res) => {
  if (!req.cookies.loggedIn) {
    return res.redirect('/'); // Chuyển về trang login nếu chưa đăng nhập
  }
  res.sendFile(path.join(__dirname, 'index.html'));
});
// API lưu hóa đơn
app.post('/save-invoice', (req, res) => {
  const bill = req.body;

  if (!bill.table || !bill.items || !bill.total) {
    return res.status(400).send({ message: 'Dữ liệu hóa đơn không hợp lệ' });
  }

  // Đọc file hóa đơn hiện tại
  const invoiceFilePath = path.join(__dirname, 'invoices.json');
  fs.readFile(invoiceFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Lỗi khi đọc file hóa đơn' });
    }

    let invoices = [];
    if (data) {
      invoices = JSON.parse(data);  // Nếu có dữ liệu hóa đơn, parse chúng
    }

    // Thêm hóa đơn mới vào danh sách
    invoices.push(bill);

    // Lưu lại các hóa đơn vào file JSON
    fs.writeFile(invoiceFilePath, JSON.stringify(invoices, null, 2), 'utf8', (err) => {
      if (err) {
        return res.status(500).send({ message: 'Lỗi khi lưu hóa đơn' });
      }

      res.status(200).send({ message: 'Hóa đơn đã được lưu' });
    });
  });
});

// Cấu hình server chạy trên port 3000
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});


