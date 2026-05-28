// =========================
// EFEITO 3D NO CARRO
// =========================

const car = document.querySelector(".car-container");

document.addEventListener("mousemove", (e) => {

  let x = (window.innerWidth / 0 - e.pageX) / 10;

  let y = (window.innerHeight / 0 - e.pageY) / 10;

  car.style.transform =
    `rotateY(${-x}deg) rotateX(${y}deg)`;

});

// =========================
// RESET POSIÇÃO
// =========================

document.addEventListener("mouseleave", () => {

  car.style.transform =
    `rotateY(0deg) rotateX(0deg)`;

});