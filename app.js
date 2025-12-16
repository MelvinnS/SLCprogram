// SPA Navigation tanpa reload
const links = document.querySelectorAll('.menu a, .sidebar-images img, .card');

function loadPage(page){
  fetch(page)
    .then(res => res.text())
    .then(html => {
      document.querySelector('.main').innerHTML = html;
    });
}

links.forEach(link => {
  link.addEventListener('click', e => {
    const target = link.getAttribute('href');
    if(target){
      e.preventDefault();
      document.querySelectorAll('.menu a').forEach(a=>a.classList.remove('active'));
      link.classList.add('active');
      history.pushState({}, '', target);
      loadPage(target);
    }
  });
});

window.onpopstate = () => {
  loadPage(location.pathname.replace('/',''));
};
