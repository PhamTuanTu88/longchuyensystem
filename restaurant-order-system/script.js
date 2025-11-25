// ...existing code...
const MENU = {
bia: [
{ name: "Bia Cốc", price: 10000 },
{ name: "Nước Ngọt", price: 10000 },
{ name: "Bia Âu", price: 40000 },
{ name: "Bia nửa Âu", price: 20000 },
{ name: "Bia Tháp", price: 65000 },
{ name: "Rượu Chai", price: 20000 },
{ name: "Nước Lọc", price: 10000 },
{ name: "Rượu Âu", price: 80000 },
{ name: "Lạc Rang", price: 10000 },
{ name: "Nem Chua", price: 25000 },
{ name: "Nem Bùi", price: 35000 },
{ name: "Bánh Đa", price: 35000 },


{ name: "Thịt chua", price: 60000 },
{ name: "Đậu lướt", price: 30000 },
{ name: "Đậu chiên", price: 30000 },
{ name: "Đậu xốt ba chỉ", price: 90000 },
{ name: "Đậu xốt tóp mỡ", price: 90000 },
{ name: "Khoai tây chiên", price: 30000 },
{ name: "Rau xào", price: 20000 },
{ name: "Rau luộc", price: 20000 },
{ name: "Mực Khô", price: 180000 },
{ name: "Mực Xào", price: 120000 },
{ name: "Mực hấp", price: 120000 },
{ name: "Mực chiên bơ", price: 120000},
{ name: "Dế mèn", price: 60000 },
{ name: "Chấu chấu", price: 60000 },
{ name: "Cá chỉ vàng", price: 40000 },
{ name: "Tóp mỡ chiên giòn", price: 90000 },
{ name: "Khoai lang chiên", price: 30000 },
{ name: "Tôm Hấp", price: 0 },
{ name: "Tóp mỡ dưa chua", price: 80000 },
{ name: "Tôm Chiên", price: 0 },
{ name: "Tim xào", price: 100000 },
{ name: "Sun xào măng", price: 80000 },
{ name: "Móng giò luộc", price: 100000 },
{ name: "Móng giò quay", price: 100000 },
{ name: "Chim câu quay", price: 120000 },
{ name: "Chim câu xào răm", price: 120000 },
{ name: "Chim câu xúc phồng tôm", price: 130000 },
{ name: "Cá chép hấp", price: 0 },
{ name: "cá chép xào", price: 0 },
{ name: "Cá chép rán", price: 0 },
{ name: "Trạch chiên", price: 80000 },
{ name: "Đuôi heo luộc", price: 100000 },
{ name: "Chân giò quay", price: 100000 },
{ name: "Chân giò hun khói", price: 100000 },
{ name: "Tai cuốn hấp", price: 80000 },
{ name: "Nộm tai heo", price: 60000 },
{ name: "Má heo quay", price: 100000 },
{ name: "Má đào cháy tỏi", price: 100000 },
{ name: "Ngan cháy tỏi", price: 80000 },
{ name: "Vịt cháy tỏi", price: 80000 },
{ name: "Lòng dồi sụn", price: 90000 },
{ name: "Thỏ nướng", price: 0 },
{ name: "Thỏ xào lăn", price: 0 },
{ name: "Thỏ tái chanh", price: 0 },
{ name: "Thỏ hấp", price: 0 },
{ name: "Tiết canh thỏ", price: 0 },
{ name: "Lòng xào dưa", price: 0 },
{ name: "Mèo nướng", price: 0 },
{ name: "Mèo xào lăn", price: 0 },
{ name: "Cháo mèo + canh", price: 0 },
{ name: "Mèo hấp", price: 0 },
{ name: "Mèo tái nộm", price: 0 },
{ name: "Lòng mèo xào", price: 0 },
{ name: "Cá hồi", price: 0 },
{ name: "Dúi", price: 0 },
{ name: "Nhím", price: 0 },
{ name: "Ba ba", price: 0 },
{ name: "Cá nheo", price: 0 },
{ name: "Cá chình", price: 0 },
{ name: "Cá lăng", price: 0 },
{ name: "Gà mẹt", price: 0 },
{ name: "Gà suất", price: 0 },
{ name: "Gà rang muối", price: 0 },
{ name: "Gà luộc", price: 0 },
{ name: "Gà nướng", price: 0 },
{ name: "Gà chiên mắm", price: 0 },
{ name: "Bò chiên thái lan", price: 120000 },
{ name: "Bò tái chanh", price: 120000 },
{ name: "Bò cuốn cải", price: 120000 },
{ name: "Bò xào cần tỏi", price: 120000 },
{ name: "Bò xào măng trúc", price: 120000 },
{ name: "Bò bít tết", price: 120000 },
{ name: "Bò lúc lắc", price: 120000 },
{ name: "Ếch rang muối", price: 80000 },
{ name: "Ếch om chuối đậu", price: 150000 },
{ name: "Ếch xào xả ớt", price: 80000 },
{ name: "Vịt nướng", price: 0 },
{ name: "Vịt luộc", price: 0 },
{ name: "Vịt rang muối", price: 0 },
{ name: "Vịt chiên giềng", price: 0 },
{ name: "Vịt xào hành răm", price: 0 },
{ name: "Ốc om chuối đậu", price: 60000 },
{ name: "Cá chép xốt cà chua", price: 0 },
{ name: "Canh miến", price: 0 },
{ name: "Mì xào", price: 0 },
{ name: "Xôi đĩa", price: 40000 },
{ name: "Xôi Chim Câu", price: 0 },
{ name: "Chả nướng", price: 100000 },
{ name: "Thuốc lá Thăng Long", price: 15000 },
{ name: "Thuốc lá Sài Gòn xanh", price: 15000 },
{ name: "Thuốc lá Sài Gòn Bấm", price: 20000 },
{ name: "Thuốc lá Sài Gòn Bạc", price: 20000 },



  ],
  lau: [
    { name: "Lẩu Riêu Cua Thập Cẩm", price: 600000 },
    { name: "Lẩu Riêu Cua Bắp Bò", price: 400000 },
    { name: "Lẩu Gà", price: 600000 },
    { name: "Lẩu Gà Bò", price: 600000 },
    { name: "Lẩu Hải Sản", price: 600000 },
    { name: "Lẩu Cá", price: 800000 },
    { name: "Lẩu Ngựa", price: 600000 },
    { name: "Lẩu Ếch", price: 600000 },
    { name: "Cá chép om dưa", price: 0 },
    { name: "Lẩu Vịt Măng Cay", price: 600000 },
    { name: "Lẩu Dê", price: 600000 },
    { name: "Mì tôm thêm", price: 25000 },
    { name: "Rau thêm", price: 20000 },
    { name: "Bò thêm", price: 0 },
    { name: "Ếch thêm", price: 0 },
    { name: "Sụn thêm", price: 0 },
    { name: "Tôm thêm", price: 0 },
    { name: "Cá thêm", price: 0 },
    { name: "Mọc ốc thêm", price: 0 },
  ],
  co: [
    { name: "Cỗ Món Theo Yêu Cầu", price: 500000 },
    { name: "Cỗ Món Theo Yêu Cầu", price: 600000 },
    { name: "Cỗ Món Theo Yêu Cầu", price: 700000 },
    { name: "Cỗ Món Theo Yêu Cầu", price: 800000 },
    { name: "Cỗ Món Theo Yêu Cầu", price: 900000 },
    { name: "Cỗ Món Theo Yêu Cầu", price: 1000000 },
    { name: "Cỗ Món Theo Yêu Cầu", price: 1100000 },
    { name: "Cỗ Món Theo Yêu Cầu", price: 1200000 },
    { name: "Cỗ Món Theo Yêu Cầu", price: 1300000 },
  ]
};

const tableOrders = {};
for (let i = 1; i <= 30; i++) tableOrders[i] = [];

let currentTable = null;
let currentCategory = 'bia';
let pendingCustomItem = null; // hold item when asking for custom price
const ORDERS_KEY = 'tableOrders_v1';

function saveOrders() {
  try {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(tableOrders));
  } catch (e) {
    console.error('Không thể lưu order vào localStorage', e);
  }
}

function loadOrders() {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    // ensure structure and copy
    for (let i = 1; i <= 30; i++) {
      if (data[i] && Array.isArray(data[i])) {
        tableOrders[i] = data[i];
      } else {
        tableOrders[i] = tableOrders[i] || [];
      }
    }
  } catch (e) {
    console.error('Không thể đọc orders từ localStorage', e);
  }
}

// render bàn
const grid = document.getElementById('grid');
for (let i = 1; i <= 30; i++) {
  const div = document.createElement('div');
  div.className = 'table-card';
  div.dataset.id = i;
  div.innerHTML = `
    <div class="table-name">Bàn ${i}</div>
    <div class="table-status" id="status-${i}">Trống</div>
  `;
  div.onclick = () => selectTable(i);
  grid.appendChild(div);
}

// load persisted orders and update statuses
loadOrders();
for (let i = 1; i <= 30; i++) {
  const st = document.getElementById(`status-${i}`);
  if (tableOrders[i] && tableOrders[i].length > 0) {
    if (st) st.textContent = 'Đang order';
  } else {
    if (st) st.textContent = 'Trống';
  }
}

function selectTable(id) {
  currentTable = id;
  document.querySelectorAll('.table-card').forEach(el => el.classList.remove('active'));
  document.querySelector(`.table-card[data-id="${id}"]`).classList.add('active');
  document.getElementById('order-title').textContent = `Đang order bàn ${id}`;
  document.getElementById('order-note').textContent = `Chọn món để thêm vào bàn ${id}`;
  renderOrder();
}

function setCategory(cat) {
  currentCategory = cat;
  document.getElementById('tab-bia').classList.remove('active');
  document.getElementById('tab-lau').classList.remove('active');
  document.getElementById('tab-co').classList.remove('active');
  document.getElementById('tab-' + cat).classList.add('active');
  renderMenu();
}

function renderMenu() {
  const wrap = document.getElementById('menu-list');
  wrap.innerHTML = '';
  const query = (document.getElementById('menu-search') && document.getElementById('menu-search').value || '').trim().toLowerCase();
  MENU[currentCategory].filter(it => it.name.toLowerCase().includes(query)).forEach(item => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    // create inner content with a small price/edit button
    const title = document.createElement('h4');
    title.textContent = item.name;
    title.style.cursor = 'pointer';
    title.onclick = () => addToOrder(item);

    const priceWrap = document.createElement('div');
    priceWrap.style.display = 'flex';
    priceWrap.style.justifyContent = 'center';
    priceWrap.style.alignItems = 'center';
    priceWrap.style.gap = '8px';

    const priceText = document.createElement('span');
    priceText.textContent = item.price.toLocaleString() + ' đ';
    priceText.style.color = 'var(--primary)';
    priceText.style.fontWeight = '600';

    const priceBtn = document.createElement('button');
    priceBtn.className = 'price-btn';
    priceBtn.title = 'Nhập giá tùy chỉnh';
    priceBtn.innerHTML = '💰';
    priceBtn.onclick = (e) => { e.stopPropagation(); openPriceModal(item); };

    priceWrap.appendChild(priceText);
    priceWrap.appendChild(priceBtn);

    div.appendChild(title);
    div.appendChild(priceWrap);
    wrap.appendChild(div);
  });
}

function addToOrder(item, customPrice) {
  if (!currentTable) { showNotification('Chọn bàn trước', 'error'); return; }
  const list = tableOrders[currentTable];
  const priceToUse = typeof customPrice === 'number' ? customPrice : item.price;
  const idx = list.findIndex(x => x.name === item.name && x.price === priceToUse);
  if (idx >= 0) {
    list[idx].qty += 1;
  } else {
    list.push({ name: item.name, price: priceToUse, qty: 1 });
  }
  document.getElementById(`status-${currentTable}`).textContent = 'Đang order';
  renderOrder();
  saveOrders();
  // thông báo cho người dùng rằng đã thêm món thành công
  try { showNotification(`Đã thêm "${item.name}" vào bàn ${currentTable}`, 'success'); } catch(e){ console.warn('notify failed', e); }

  try { if (socket && currentTable) socket.emit('order-update', { table: currentTable, order: tableOrders[currentTable] }); } catch(e){}
}

// Open the price modal for custom-price categories
function openPriceModal(item) {
  if (!currentTable) { showNotification('Chọn bàn trước', 'error'); return; }
  pendingCustomItem = item;
  const modal = document.getElementById('price-modal');
  const title = document.getElementById('price-modal-title');
  const sub = document.getElementById('price-modal-sub');
  const input = document.getElementById('price-input');
  const qty = document.getElementById('price-qty');
  title.textContent = `Nhập giá cho: ${item.name}`;
  sub.textContent = `Mặc định: ${item.price.toLocaleString()} đ — thay đổi nếu khách yêu cầu`;
  input.value = item.price || '';
  qty.value = '1';
  modal.classList.add('show');
}

function closePriceModal() {
  const modal = document.getElementById('price-modal');
  modal.classList.remove('show');
  pendingCustomItem = null;
}

function confirmPrice() {
  const input = document.getElementById('price-input');
  const qty = document.getElementById('price-qty');
  const v = Number(input.value);
  // ensure integer quantity
  let q = Number(qty.value);
  if (!Number.isFinite(q)) q = 1;
  q = Math.floor(Math.max(1, q));
  if (!pendingCustomItem) return closePriceModal();
  if (!v || v <= 0) {
    showNotification('Vui lòng nhập giá hợp lệ (số lớn hơn 0).', 'error');
    return;
  }
  // add item q times with custom price
  const priceRounded = Math.round(v);
  for (let i = 0; i < q; i++) {
    addToOrder(pendingCustomItem, priceRounded);
  }
  closePriceModal();
}

// đổi: mỗi lần bấm sẽ trừ 1, còn 0 thì xóa
function deleteItemFromOrder(index) {
  if (!currentTable) return;
  const list = tableOrders[currentTable];
  if (!list[index]) return;

  list[index].qty -= 1;             // trừ 1 đơn vị
  if (list[index].qty <= 0) {
    list.splice(index, 1);          // hết thì xóa
  }

  if (list.length === 0) {
    document.getElementById(`status-${currentTable}`).textContent = 'Trống';
  }

  renderOrder();
  saveOrders();
  try { if (socket && currentTable) socket.emit('order-update', { table: currentTable, order: tableOrders[currentTable] }); } catch(e){}
}

function renderOrder() {
  const tbody = document.getElementById('order-body');
  const totalEl = document.getElementById('order-total');
  tbody.innerHTML = '';
  if (!currentTable) { totalEl.textContent = '0'; return; }

  const list = tableOrders[currentTable];
  let total = 0;
  list.forEach((item, idx) => {
    const line = item.qty * item.price;
    total += line;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>${item.price.toLocaleString()}</td>
      <td>${line.toLocaleString()}</td>
      <td><button class="btn-del" onclick="deleteItemFromOrder(${idx})">-1</button></td>
    `;
    tbody.appendChild(tr);
  });
  totalEl.textContent = total.toLocaleString();
}

// DOM modal
const modalEl       = document.getElementById('invoice-modal');
const mTableEl      = document.getElementById('mTable');
const mBodyEl       = document.getElementById('mBody');
const mTotalEl      = document.getElementById('mTotal');
const btnPrint      = document.getElementById('btn-print');
const btnConfirm    = document.getElementById('btn-confirm');
const btnCloseModal = document.getElementById('modal-close');

function openInvoiceModal(bill){
  mTableEl.textContent = bill.table;
  mBodyEl.innerHTML = '';
  bill.items.forEach(item=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="padding:6px">${item.name}</td>
      <td style="padding:6px;text-align:right">${item.qty}</td>
      <td style="padding:6px;text-align:right">${currency(item.price)}</td>
      <td style="padding:6px;text-align:right">${currency(item.total)}</td>
    `;
    mBodyEl.appendChild(tr);
  });
  mTotalEl.textContent = currency(bill.totalAmount);
  modalEl.classList.add('show');
}

function closeInvoiceModal(){
  modalEl.classList.remove('show');
}

btnPrint.addEventListener('click', ()=> window.print());
btnCloseModal.addEventListener('click', closeInvoiceModal);
modalEl.addEventListener('click', (e)=>{
  if(e.target === modalEl || e.target.classList.contains('modal__backdrop')){
    closeInvoiceModal();
  }
});

btnConfirm.addEventListener('click', ()=>{
  if (!currentTable) return;
  tableOrders[currentTable] = [];
  const st = document.getElementById(`status-${currentTable}`);
  if (st) st.textContent = 'Trống';
  closeInvoiceModal();
  renderOrder();
  saveOrders();
});

let lastBill = null;
const currency = n => Number(n||0).toLocaleString('vi-VN');

// --- Socket.IO real-time sync ---
let socket = null;
try {
  socket = io();
  socket.on('connect', () => console.log('connected to socket', socket.id));

  socket.on('order-update', (payload) => {
    try {
      if (!payload || typeof payload.table === 'undefined') return;
      const t = payload.table;
      tableOrders[t] = payload.order || [];
      const st = document.getElementById(`status-${t}`);
      if (st) st.textContent = (tableOrders[t] && tableOrders[t].length > 0) ? 'Đang order' : 'Trống';
      if (Number(currentTable) === Number(t)) renderOrder();
      saveOrders();
    } catch (e) { console.error('order-update handling error', e); }
  });

  socket.on('order-cleared', (payload) => {
    try {
      if (!payload || typeof payload.table === 'undefined') return;
      const t = payload.table;
      tableOrders[t] = [];
      const st = document.getElementById(`status-${t}`);
      if (st) st.textContent = 'Trống';
      if (Number(currentTable) === Number(t)) renderOrder();
      saveOrders();
    } catch (e) { console.error('order-cleared error', e); }
  });

  socket.on('invoice-saved', (bill) => {
    if (bill && bill.table) {
      showNotification(`Hóa đơn bàn ${bill.table} đã được lưu (thiết bị khác)`, 'success');
    }
  });

  // remote-print: when a remote device (phone) requests printing, desktop browser can handle it
  const isMobileClient = /Mobi|Android/i.test(navigator.userAgent || '');
  socket.on('remote-print', (data) => {
    try {
      // only attempt to print from non-mobile clients by default
      if (isMobileClient) return;
      // data expected: { table, items: [...], total }
      showNotification(`Nhận lệnh in từ thiết bị khác (bàn ${data.table})`, 'success');
      // create printable content and open print dialog
      printRemoteInvoice(data);
    } catch (e) { console.error('remote-print handling error', e); }
  });
} catch (e) {
  console.warn('Socket.IO client not available', e);
}

function printRemoteInvoice(data) {
  try {
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
    let itemsHtml = '';
    let total = 0;
    (data.items || []).forEach(it => {
      const line = (it.qty || 1) * (Number(it.price) || 0);
      total += line;
      itemsHtml += `<tr><td style="padding:6px">${it.name}</td><td style="padding:6px;text-align:right">${it.qty || 1}</td><td style="padding:6px;text-align:right">${(Number(it.price)||0).toLocaleString()}</td><td style="padding:6px;text-align:right">${line.toLocaleString()}</td></tr>`;
    });

    const html = `
      <html>
        <head>
          <meta charset="utf-8">
          <title>Hóa đơn - Bàn ${data.table}</title>
          <style>
            /* Thiết kế tối ưu cho giấy nhiệt khổ 80mm (~320px) */
            body{font-family: 'Segoe UI', Roboto, Arial, Helvetica, sans-serif; color:#111; margin:0; padding:8px; -webkit-print-color-adjust:exact}
            .receipt{width:320px; max-width:320px; margin:0 auto}
            .header{text-align:center}
            .header .title{font-size:28px; font-weight:800; margin:0}
            .address{font-size:14px; color:#333; margin-bottom:6px}
            .meta{font-size:14px; margin:6px 0}
            table{width:100%; border-collapse:collapse; font-size:16px}
            thead th{font-weight:800; text-align:left; padding:8px 0}
            tbody td{padding:8px 0; border-bottom:1px dashed #e8e8e8}
            .col-name{width:55%}
            .col-qty, .col-price, .col-line{width:15%; text-align:right}
            .total{font-size:26px; font-weight:900; margin-top:10px; text-align:right; padding-top:8px; border-top:2px solid #222}
            .thankyou{margin-top:12px; text-align:center; font-weight:800; font-size:16px}
            @media print { body{margin:0; padding:4px} .receipt{width:320px} }
          </style>
        </head>
        <body>
            <div class="receipt">
              <div class="header">
                <div class="title">Nhà Hàng Long Chuyên</div>
                <div class="address">Thôn Lau - Hoàng Lâu - Tam Dương - Vĩnh Phúc</div>
              </div>
              <div class="meta"><strong>Hóa đơn - Bàn ${data.table}</strong></div>
              <div style="font-size:12px;margin-bottom:8px">Thời gian: ${formattedDate}</div>
              <table>
                <thead><tr><th class="col-name">Món</th><th class="col-qty">SL</th><th class="col-price">Giá</th><th class="col-line">Thành</th></tr></thead>
                <tbody>${itemsHtml}</tbody>
              </table>
              <div class="total">Tổng: ${total.toLocaleString()} đ</div>
              <div class="thankyou">Xin cảm ơn quý khách !</div>
            </div>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank', 'width=600,height=600');
    if (!printWindow) {
      showNotification('Không thể mở cửa sổ in. Vui lòng cho phép popup.', 'error');
      return;
    }
    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
    // give browser a moment to render then trigger print
    setTimeout(() => {
      try { printWindow.focus(); printWindow.print(); } catch (e) { console.error('print failed', e); }
    }, 500);
  } catch (e) {
    console.error('printRemoteInvoice error', e);
    showNotification('Lỗi khi thực hiện in từ thiết bị khác', 'error');
  }
}

// Printer registration UI + handlers
let printerRegistered = false;
function updatePrinterButton() {
  let btn = document.getElementById('printer-toggle');
  if (!btn) return;
  btn.textContent = printerRegistered ? 'Hủy đăng ký máy in' : 'Đăng ký làm máy in';
  btn.style.background = printerRegistered ? '#c0392b' : '#2ecc71';
}

function togglePrinterRegistration() {
  if (!socket) { showNotification('Không kết nối socket', 'error'); return; }
  if (printerRegistered) {
    socket.emit('unregister-printer');
  } else {
    // optional meta: hostname or user info
    const meta = { name: navigator.userAgent, when: new Date().toISOString() };
    socket.emit('register-printer', meta);
  }
}

// socket responses
try {
  if (socket) {
    socket.on('printer-registered', (info) => {
      printerRegistered = true; updatePrinterButton();
      showNotification('Thiết bị đã đăng ký làm máy in', 'success');
      console.log('printer-registered', info);
    });
    socket.on('printer-unregistered', () => {
      printerRegistered = false; updatePrinterButton();
      showNotification('Đã hủy đăng ký máy in', 'success');
    });
  }
} catch (e) { console.warn('printer socket handlers not attached', e); }

// inject a small floating button on desktop to register as printer
document.addEventListener('DOMContentLoaded', () => {
  const isMobileClient = /Mobi|Android/i.test(navigator.userAgent || '');
  if (isMobileClient) return; // only show on non-mobile
  const btn = document.createElement('button');
  btn.id = 'printer-toggle';
  btn.style.position = 'fixed';
  btn.style.right = '12px';
  btn.style.bottom = '12px';
  btn.style.zIndex = 9999;
  btn.style.padding = '10px 12px';
  btn.style.borderRadius = '6px';
  btn.style.border = 'none';
  btn.style.color = '#fff';
  btn.style.cursor = 'pointer';
  btn.onclick = togglePrinterRegistration;
  document.body.appendChild(btn);
  updatePrinterButton();
});

// Hàm hiển thị thông báo
function showNotification(message, type = 'success') {
  const modal = document.getElementById('notification-modal');
  const messageEl = document.getElementById('notification-message');
  const iconEl = document.getElementById('notification-icon');
  const contentEl = modal.querySelector('.notification-content');
  
  messageEl.textContent = message;
  
  // Xóa các class cũ
  contentEl.classList.remove('success', 'error');
  contentEl.classList.add(type);
  
  // Đặt icon
  if (type === 'success') {
    iconEl.textContent = '✓';
  } else if (type === 'error') {
    iconEl.textContent = '✕';
  }
  
  modal.classList.add('show');
}

function closeNotification() {
  const modal = document.getElementById('notification-modal');
  modal.classList.remove('show');
}

function saveBill(bill) {
  const rec = {
    id: 'HD' + Date.now(),
    time: new Date().toLocaleString('vi-VN'),
    table: bill.table,
    total: bill.totalAmount
  };
  const key = 'bills';
  const arr = JSON.parse(localStorage.getItem(key) || '[]');
  arr.push(rec);
  localStorage.setItem(key, JSON.stringify(arr));
}

function loadBills() {
  return JSON.parse(localStorage.getItem('bills') || '[]');
}

function payment() {
  if (!currentTable) {
    showNotification('Chọn bàn trước', 'error');
    return;
  }

  const orderList = tableOrders[currentTable];
  if (orderList.length === 0) {
    showNotification('Không có món nào trong đơn hàng.', 'error');
    return;
  }

  let total = 0;
  orderList.forEach(item => {
    total += item.qty * item.price;
  });

  let billContent = `
    <h2>Hóa đơn - Bàn ${currentTable}</h2>
    <table style="width:100%;border-collapse:collapse">
      <thead>
        <tr>
          <th style="text-align:left;padding:6px">Món</th>
          <th style="text-align:right;padding:6px">SL</th>
          <th style="text-align:right;padding:6px">Giá</th>
          <th style="text-align:right;padding:6px">Thành tiền</th>
        </tr>
      </thead>
      <tbody>
  `;

  orderList.forEach(item => {
    const line = item.qty * item.price;
    billContent += `
      <tr>
        <td style="padding:6px">${item.name}</td>
        <td style="padding:6px;text-align:right">${item.qty}</td>
        <td style="padding:6px;text-align:right">${item.price.toLocaleString()}</td>
        <td style="padding:6px;text-align:right">${line.toLocaleString()}</td>
      </tr>
    `;
  });

  billContent += `
    </tbody>
    </table>
    <h3 style="text-align:right;margin-top:12px">Tổng cộng: ${total.toLocaleString()} đ</h3>
  `;

  // Build modal using existing modal styles so body can scroll and footer stays visible
  const wrapper = document.createElement('div');
  wrapper.id = 'payment-modal';
  wrapper.className = 'modal show';
  wrapper.innerHTML = `
    <div class="modal__backdrop"></div>
    <div class="modal__dialog">
      <div class="modal__header">
        <div>
          <div style="font-weight:700">Nhà Hàng Long Chuyên</div>
          <div class="subtitle">Hóa đơn bàn ${currentTable}</div>
        </div>
        <button class="modal__close" aria-label="Đóng">×</button>
      </div>

      <div class="modal__body">
        ${billContent}
      </div>

      <div class="modal__footer">
        <button id="payment-print" class="btn-primary" onclick="printBill()">In hóa đơn</button>
        <button id="payment-paid" class="btn-primary outline" onclick="markAsPaid()">Đã thanh toán</button>
      </div>
    </div>
  `;

  document.body.appendChild(wrapper);

  // close handlers
  const backdrop = wrapper.querySelector('.modal__backdrop');
  const closeBtn = wrapper.querySelector('.modal__close');
  backdrop.addEventListener('click', () => wrapper.remove());
  closeBtn.addEventListener('click', () => wrapper.remove());
}

function printBill() {
  const modalBody = document.querySelector('#payment-modal .modal__body') || document.querySelector('.modal__body');
  const billContent = modalBody ? modalBody.innerHTML : '';
  const isMobileClient = /Mobi|Android/i.test(navigator.userAgent || '');
  // If mobile, send a remote-print request to the server so a connected PC browser can print
  if (isMobileClient) {
    const orderList = tableOrders[currentTable] || [];
    const total = orderList.reduce((t, it) => t + (it.qty * it.price), 0);
    const paymentData = { table: currentTable, items: orderList, total };
    // Try to use stored print token first; if not present ask user to enter one.
    const storedToken = localStorage.getItem('printToken');
    function doRemotePrint(token) {
      const payload = Object.assign({}, paymentData);
      if (token) payload.printToken = token;
      fetch('/remote-print', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        .then(r => r.json())
        .then(resp => {
          if (resp && resp.ok) showNotification('Đã gửi lệnh in tới máy in (qua trình duyệt máy tính).', 'success');
          else showNotification(resp.message || 'Không gửi được lệnh in.', 'error');
        })
        .catch(err => { console.error('remote-print error', err); showNotification('Lỗi khi gửi lệnh in', 'error'); });
    }

    if (storedToken) {
      doRemotePrint(storedToken);
    } else {
      const token = prompt('Nhập mã in (PRINT_TOKEN) nếu bạn đã cấu hình, hoặc nhấn Hủy để đăng nhập bình thường:');
      if (token) {
        localStorage.setItem('printToken', token);
        doRemotePrint(token);
      } else {
        // no token entered -> try without token (may require login on server)
        doRemotePrint(null);
      }
    }
    return;
  }
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
  const orderList = tableOrders[currentTable] || [];
  const total = orderList.reduce((s, it) => s + (it.qty * it.price), 0);

  const billHtml = `
    <html>
      <head>
        <meta charset="utf-8">
        <title>Hóa đơn - Bàn ${currentTable}</title>
        <style>
          body{font-family: 'Segoe UI', Roboto, Arial, Helvetica, sans-serif; color:#111; margin:0; padding:8px}
          .receipt{width:320px; max-width:320px; margin:0 auto}
          .header{text-align:center}
          .header .title{font-size:28px;font-weight:800;margin:0}
          .address{font-size:14px;color:#333;margin-bottom:6px}
          .meta{font-size:14px;margin:6px 0}
          table{width:100%;border-collapse:collapse;font-size:16px}
          thead th{font-weight:800;text-align:left;padding:8px 0}
          tbody td{padding:8px 0;border-bottom:1px dashed #e8e8e8}
          .col-name{width:55%}
          .col-qty,.col-price,.col-line{text-align:right;width:15%}
          .total{font-size:26px;font-weight:900;margin-top:8px;text-align:right;padding-top:8px;border-top:2px solid #222}
          .thankyou{margin-top:12px;text-align:center;font-weight:800;font-size:16px}
          @media print{ body{margin:0;padding:4px} .receipt{width:320px} }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div class="header">
            <div class="title">Nhà Hàng Long Chuyên</div>
            <div class="address">Thôn Lau - Hoàng Lâu - Tam Dương - Vĩnh Phúc</div>
          </div>
          <div class="meta"><strong>Hóa đơn - Bàn ${currentTable}</strong></div>
          <div style="font-size:12px;margin-bottom:8px">Ngày: ${formattedDate}</div>
          ${billContent}
          <div class="total">Tổng: ${total.toLocaleString()} đ</div>
          <div class="thankyou">Xin cảm ơn quý khách !</div>
        </div>
      </body>
    </html>
  `;
  const printWindow = window.open('', '', 'width=420,height=680');
  if (!printWindow) { showNotification('Không thể mở cửa sổ in. Vui lòng cho phép popup.', 'error'); return; }
  printWindow.document.open();
  printWindow.document.write(billHtml);
  printWindow.document.close();
  setTimeout(()=>{ try{ printWindow.focus(); printWindow.print(); }catch(e){ console.error(e); } }, 400);
}

function markAsPaid() {
  const orderList = tableOrders[currentTable];
  const total = orderList.reduce((total, item) => total + item.qty * item.price, 0);

  const paymentData = {
    table: currentTable,
    items: orderList,
    total: total,
    createdAt: new Date().toISOString()
  };

  // If user has a print/save token (for unauthenticated devices), include it so server can accept the request
  const saveToken = localStorage.getItem('printToken') || null;
  if (saveToken) paymentData.saveToken = saveToken;

  fetch('/save-invoice', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-save-token': saveToken || ''
    },
    body: JSON.stringify(paymentData),
  })
  .then(response => response.json())
  .then(data => {
    showNotification(data.message || 'Lưu hóa đơn thành công!', 'success');

    // Gọi lại getReport để cập nhật khu báo cáo tổng kết (kho tổng kết)
    getReport();

    // Xóa order của bàn (ghi lại id trước khi reset currentTable)
    const clearedTable = currentTable;
    tableOrders[clearedTable] = [];
    const stEl = document.getElementById(`status-${clearedTable}`);
    if (stEl) stEl.textContent = 'Trống';

    // Reset lại currentTable và UI
    currentTable = null;
    document.querySelectorAll('.table-card').forEach(el => el.classList.remove('active'));
    document.getElementById('order-title').textContent = 'Chưa chọn bàn';
    document.getElementById('order-note').textContent = 'Bấm bàn bên trái để bắt đầu order';

    renderOrder();

    // Đóng modal thanh toán
    const modal = document.getElementById('payment-modal');
    if (modal) {
      modal.remove();
    }

    saveOrders();
    // notify other clients that this table was cleared
    try { if (socket) socket.emit('order-cleared', { table: clearedTable }); } catch(e){}
  })
  .catch(error => {
    console.error('Error:', error);
    showNotification('Có lỗi xảy ra khi lưu hóa đơn.', 'error');
  });
}
// ...existing code...
// Reports: client helpers
let _lastReport = null;

function formatNumber(n){ return Number(n||0).toLocaleString(); }


function getReport() {
  const type = document.getElementById('report-type').value;
  const date = document.getElementById('report-date').value;
  const q = `type=${encodeURIComponent(type)}&date=${encodeURIComponent(date)}`;
  fetch(`/reports?${q}`)
    .then(r => r.json())
    .then(data => {
      document.getElementById('report-total').textContent = formatNumber(data.total);
      document.getElementById('report-count').textContent = data.count || 0;
      _lastReport = data;
      showNotification('Báo cáo đã tải', 'success');
      // Nếu muốn render nhanh vào kho tổng kết trên giao diện luôn từ dữ liệu server ở đây thêm đoạn sau,
      // hoặc dùng API khác / thêm phần phía backend trả về chi tiết từng bill để render table chi tiết.
      // Hoặc bạn tiếp tục dùng phần kho tổng kết tạm ở localStorage cho "Tổng kết cá nhân" nếu cần.
    })
    .catch(err => {
      console.error(err);
      showNotification('Không lấy được báo cáo', 'error');
    });
}

function downloadCSV(filename, rows) {
  const csv = rows.map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function exportReportCSV() {
  if (!_lastReport) {
    showNotification('Chưa có báo cáo để xuất', 'error');
    return;
  }
  const from = _lastReport.from || '';
  const to = _lastReport.to || '';
  const rows = [ ['from','to','total','count'], [from, to, _lastReport.total, _lastReport.count] ];
  const when = new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
  downloadCSV(`report-${when}.csv`, rows);
}

// wire up report controls
// Summary storage (collected by pressing 'Tổng kết')
const SUMMARIES_KEY = 'collectedSummaries_v1';

function loadSummaries(){
  try { return JSON.parse(localStorage.getItem(SUMMARIES_KEY) || '[]'); } catch(e){ return []; }
}
function saveSummaries(arr){
  try { localStorage.setItem(SUMMARIES_KEY, JSON.stringify(arr)); } catch(e){ console.error('Cannot save summaries', e); }
}

function addToSummary(){
  if (!currentTable) { showNotification('Chọn bàn trước để tổng kết', 'error'); return; }
  const orderList = tableOrders[currentTable] || [];
  if (orderList.length === 0) { showNotification('Không có món để tổng kết', 'error'); return; }

  const total = orderList.reduce((s, it) => s + it.qty * it.price, 0);
  const rec = { id: 'S' + Date.now(), table: currentTable, total, time: new Date().toISOString() };
  const arr = loadSummaries();
  arr.push(rec);
  saveSummaries(arr);
  renderCollectedSummaries();
  showNotification('Đã thêm vào kho tổng kết', 'success');
}

function renderCollectedSummaries(){
  const wrap = document.getElementById('collected-summaries');
  if (!wrap) return;
  const arr = loadSummaries();
  if (arr.length === 0) { wrap.innerHTML = '<div style="color:var(--text-secondary)">Chưa có mục tổng kết nào</div>'; return; }
  wrap.innerHTML = '';
  arr.slice().reverse().forEach(item => {
    const el = document.createElement('div');
    el.style = 'padding:6px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center';
    el.innerHTML = `<div><strong>Bàn ${item.table}</strong><div style="font-size:12px;color:var(--text-secondary)">${new Date(item.time).toLocaleString()}</div></div><div style="text-align:right"><div>${Number(item.total).toLocaleString()} đ</div></div>`;
    wrap.appendChild(el);
  });
}

function clearSummaries(){
  if (!confirm('Xóa tất cả mục tổng kết?')) return;
  saveSummaries([]);
  renderCollectedSummaries();
}

function exportSummariesCSV(){
  const arr = loadSummaries();
  if (!arr || arr.length === 0) { showNotification('Không có mục nào để xuất', 'error'); return; }
  const rows = [['id','table','time','total']].concat(arr.map(a=>[a.id,a.table,a.time,a.total]));
  const when = new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
  downloadCSV(`summaries-${when}.csv`, rows);
}

function toggleReports(){
  const c = document.getElementById('reports-container');
  if (!c) return;
  const shown = c.style.display !== 'none';
  c.style.display = shown ? 'none' : 'block';
  if (!shown) renderCollectedSummaries();
}

// wire up report controls and summary buttons on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const dateEl = document.getElementById('report-date');
  if (dateEl) {
    const today = new Date();
    dateEl.value = today.toISOString().slice(0,10);
  }
  const btn = document.getElementById('btn-get-report');
  if (btn) btn.addEventListener('click', getReport);
  const bex = document.getElementById('btn-export-report');
  if (bex) bex.addEventListener('click', exportReportCSV);

  const toggleBtn = document.getElementById('btn-toggle-reports');
  if (toggleBtn) toggleBtn.addEventListener('click', toggleReports);

  // The fixed bar 'Tổng kết' button now opens the reports panel (daily/monthly/yearly)
  const openReportsBtn = document.getElementById('btn-open-reports') || document.getElementById('btn-add-summary');
  if (openReportsBtn) openReportsBtn.addEventListener('click', () => {
    // ensure report date defaults to today and show reports UI
    const dateEl = document.getElementById('report-date');
    if (dateEl) dateEl.value = new Date().toISOString().slice(0,10);
    const typeEl = document.getElementById('report-type');
    if (typeEl) typeEl.value = 'daily';
    toggleReports();
  });

  const clearBtn = document.getElementById('btn-clear-summaries');
  if (clearBtn) clearBtn.addEventListener('click', clearSummaries);

  const exportSummBtn = document.getElementById('btn-export-summaries');
  if (exportSummBtn) exportSummBtn.addEventListener('click', exportSummariesCSV);

  // initial render if reports visible
  const reportsContainer = document.getElementById('reports-container');
  if (reportsContainer && reportsContainer.style.display !== 'none') renderCollectedSummaries();
});
