// Płynne przewijanie do sekcji
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Przycisk "powrót do góry"
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 20px;
  padding: 10px 15px;
  font-size: 20px;
  display: none;
  z-index: 999;
`;

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Podświetlanie aktywnego linku
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Slider aut – co 3 sekundy podświetlenie jednego auta
const cars = document.querySelectorAll(".car");
let currentCar = 0;

function highlightNextCar() {
  cars.forEach((car, i) => {
    car.style.outline = i === currentCar ? "3px solid orange" : "none";
  });
  currentCar = (currentCar + 1) % cars.length;
}

setInterval(highlightNextCar, 3000);

// Kliknięcie auta – przesuń do niego
cars.forEach((car, i) => {
  car.addEventListener("click", () => {
    car.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// Walidacja formularza (jeśli kiedyś dodasz)
const emailButton = document.querySelector('button[onclick^="location.href"]');
if (emailButton) {
  emailButton.addEventListener("click", (e) => {
    const mailto = emailButton.getAttribute("onclick");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = mailto.split(":")[1];
    if (!emailRegex.test(email)) {
      alert("Nieprawidłowy adres e-mail.");
      e.preventDefault();
    }
  });
}

// Prosty efekt ładowania
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
