// =========================
// ANIMAÇÃO AO SCROLL
// =========================

const elements = document.querySelectorAll(
  '.fade-up, .fade-left, .fade-right, .zoom'
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

}, {
  threshold:0.2
});

elements.forEach((el) => {
  observer.observe(el);
});

// =========================
// PARTÍCULAS
// =========================

const particles =
document.querySelector('.particles');

if(particles){

  for(let i = 0; i < 30; i++){

    const span =
    document.createElement('span');

    span.style.left =
    Math.random() * 100 + '%';

    span.style.animationDelay =
    Math.random() * 5 + 's';

    span.style.animationDuration =
    5 + Math.random() * 10 + 's';

    particles.appendChild(span);

  }

}