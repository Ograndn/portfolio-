const elements = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;

    if (top < visible) {
      el.classList.add('show');
    }
  });
});