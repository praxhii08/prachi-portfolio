
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-right a');
  links.forEach(l => {
    if (l.href === location.href || location.pathname.endsWith(l.getAttribute('href'))) {
      l.style.color = 'white';
      l.style.fontWeight = '700';
    }
  });
});
