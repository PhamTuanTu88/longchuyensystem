document.addEventListener('DOMContentLoaded', () => {
  const menuSearch = document.getElementById('menu-search');
  if (menuSearch) {
    const today = new Date();
    menuSearch.value = '';
    menuSearch.addEventListener('input', () => {
      if (typeof renderMenu === 'function') renderMenu();
    });
  }
  const menuClear = document.getElementById('menu-clear-search');
  if (menuClear) menuClear.addEventListener('click', () => { const ms = document.getElementById('menu-search'); if (ms) { ms.value = ''; if (typeof renderMenu === 'function') renderMenu(); } });
  if (typeof renderMenu === 'function') renderMenu();
});
