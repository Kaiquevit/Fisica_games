window.addEventListener('scroll', function () {
  const header = document.querySelector('#header');
  if (header) {
    header.classList.toggle('rolagem1', window.scrollY > 20);
  }
});
