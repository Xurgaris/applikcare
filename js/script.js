// =========================
// MOBILE MENU
// =========================

const mobileMenu =
document.querySelector(".mobile-menu");

const navbar =
document.querySelector(".navbar");

mobileMenu.addEventListener("click", () => {

  navbar.classList.toggle("active");

});

// =========================
// HEADER EFFECT
// =========================

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    header.style.boxShadow =
    "0 15px 40px rgba(16,32,51,.08)";

  }else{

    header.style.boxShadow =
    "none";

  }

});

// =========================
// FAQ
// =========================

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question =
  item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    item.classList.toggle("active");

  });

});

// =========================
// SCROLL REVEAL
// =========================

const reveals =
document.querySelectorAll(

  ".trust-card,\
  .about-card,\
  .specialty-card,\
  .plan-card,\
  .partner-card,\
  .differential-card,\
  .testimonial-card,\
  .faq-item"

);

reveals.forEach(el => {

  el.classList.add("reveal");

});

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){

  const trigger =
  window.innerHeight * .85;

  reveals.forEach(el => {

    const top =
    el.getBoundingClientRect().top;

    if(top < trigger){

      el.classList.add("active");

    }

  });

}

revealOnScroll();

// =========================
// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute("href")
    );

    window.scrollTo({

      top:
      target.offsetTop - 80,

      behavior:"smooth"

    });

  });

});

// =========================
// ACTIVE MENU
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
    section.offsetTop - 120;

    if(pageYOffset >= sectionTop){

      current =
      section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(

      link.getAttribute("href")
      === `#${current}`

    ){

      link.classList.add("active");

    }

  });

});