// Helper to clear all test data from localStorage
function clearAllData(){
  if (!confirm('Xóa TẤT CẢ dữ liệu test (orders, tóm tắt, hoá đơn local)? Hành động này không thể hoàn tác.')) return;
  const ORDERS_KEY = 'tableOrders_v1';
  const SUMMARIES_KEY = 'collectedSummaries_v1';
  localStorage.removeItem(ORDERS_KEY);
  localStorage.removeItem(SUMMARIES_KEY);
  localStorage.removeItem('bills');
  // attempt to clear server invoices as well
  fetch('/clear-invoices', { method: 'POST' })
    .then(r => r.json())
    .then(info => {
      showNotification((info && info.message) ? info.message : 'Đã xóa dữ liệu test (local + server).', 'success');
      setTimeout(() => location.reload(), 1200);
    })
    .catch(err => {
      console.error('Clear invoices failed', err);
      showNotification('Đã xóa dữ liệu local. Không thể xóa invoices trên server.', 'error');
      setTimeout(() => location.reload(), 1000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const clearAllBtn = document.getElementById('btn-clear-all-data');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', clearAllData);
  }
});
