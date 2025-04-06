function setSidebarFocusable(isOpen) {
  const sidebar = document.querySelector('.sidebar');
  const focusableEls = sidebar.querySelectorAll('a, button, input, select, textarea, [tabindex]');
  const menuExpanded = document.querySelector('.menuBtn');

  focusableEls.forEach(el => {
    if (isOpen) {
      el.removeAttribute('tabindex'); 
      menuExpanded.setAttribute('aria-expanded','true');
    } else {
      el.setAttribute('tabindex', '-1'); 
      menuExpanded.setAttribute('aria-expanded','false');
    }
  });
}

document.querySelector('.menuBtn').addEventListener('click', () => {
  setSidebarFocusable(true);
});
document.querySelector('.menuCloseBtn').addEventListener('click', () => {
  setSidebarFocusable(false);
});
  