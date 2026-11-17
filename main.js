// Año del pie de página
document.getElementById('y').textContent = new Date().getFullYear();

// Guardar como PDF (usa el diálogo de impresión del navegador)
document.getElementById('print').addEventListener('click', () => window.print());

// Oculta los botones de proyecto que aún no tienen enlace real
document.querySelectorAll('.proj').forEach(a => {
  if (a.getAttribute('href') === '#') a.hidden = true;
  else { a.target = '_blank'; a.rel = 'noopener'; }
});

// Resalta en el menú la sección visible
const links = document.querySelectorAll('nav a');
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle('on', l.hash === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
