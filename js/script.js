// =========================================================
// APPLIK CARE - MAIN SCRIPT
// =========================================================

// =========================================================
// LOADER
// =========================================================

window.addEventListener("load", () => {

  const loader = document.querySelector(".loader");

  if(loader){

    setTimeout(() => {
      loader.classList.add("hide");
    }, 700);

  }

});

// =========================================================
// HEADER EFFECT
// =========================================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 40){

    header.classList.add("active");

  }else{

    header.classList.remove("active");

  }

});

// =========================================================
// MOBILE MENU
// =========================================================

const mobileMenu = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");

if(mobileMenu){

  mobileMenu.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = mobileMenu.querySelector("i");

    if(navbar.classList.contains("active")){

      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");

    }else{

      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");

    }

  });

}

// CLOSE MENU WHEN CLICK LINK

document.querySelectorAll(".navbar a").forEach(link => {

  link.addEventListener("click", () => {

    navbar.classList.remove("active");

    const icon = mobileMenu.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});

// =========================================================
// SMOOTH SCROLL
// =========================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if(target){

      window.scrollTo({
        top:target.offsetTop - 90,
        behavior:"smooth"
      });

    }

  });

});

// =========================================================
// ACTIVE MENU
// =========================================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.href.includes(current)){

      link.classList.add("active");

    }

  });

});

// =========================================================
// FAQ ACCORDION
// =========================================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    faqItems.forEach(faq => {

      if(faq !== item){

        faq.classList.remove("active");

      }

    });

    item.classList.toggle("active");

  });

});

// =========================================================
// COUNTER ANIMATION
// =========================================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const counter = entry.target;

      const target =
        +counter.getAttribute("data-target");

      let count = 0;

      const updateCounter = () => {

        const increment = target / 80;

        if(count < target){

          count += increment;

          counter.innerText =
            Math.ceil(count);

          requestAnimationFrame(updateCounter);

        }else{

          counter.innerText = target;

        }

      };

      updateCounter();

      counterObserver.unobserve(counter);

    }

  });

}, {
  threshold:0.5
});

counters.forEach(counter => {
  counterObserver.observe(counter);
});

// =========================================================
// SWIPER REVIEWS
// =========================================================

const reviewSwiper = new Swiper(".reviewSwiper", {

  loop:true,

  spaceBetween:30,

  autoplay:{
    delay:4000,
    disableOnInteraction:false
  },

  pagination:{
    el:".swiper-pagination",
    clickable:true
  },

  breakpoints:{

    0:{
      slidesPerView:1
    },

    768:{
      slidesPerView:2
    },

    1100:{
      slidesPerView:3
    }

  }

});

// =========================================================
// PARTNERS SWIPER
// =========================================================

const partnerSwiper = new Swiper(".partnerSwiper", {

  loop:true,

  speed:5000,

  allowTouchMove:false,

  autoplay:{
    delay:0,
    disableOnInteraction:false
  },

  breakpoints:{

    0:{
      slidesPerView:2,
      spaceBetween:20
    },

    768:{
      slidesPerView:4,
      spaceBetween:30
    },

    1100:{
      slidesPerView:6,
      spaceBetween:40
    }

  }

});

// =========================================================
// AOS
// =========================================================

AOS.init({

  duration:1000,
  once:true,
  offset:80

});

// =========================================================
// BUTTON RIPPLE EFFECT
// =========================================================

const buttons = document.querySelectorAll(
  ".btn-primary, .btn-outline"
);

buttons.forEach(button => {

  button.addEventListener("click", function(e){

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();

    const size = Math.max(
      rect.width,
      rect.height
    );

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;

    ripple.style.left =
      `${e.clientX - rect.left - size / 2}px`;

    ripple.style.top =
      `${e.clientY - rect.top - size / 2}px`;

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 700);

  });

});

// =========================================================
// FLOATING ANIMATION
// =========================================================

const floatingCard =
  document.querySelector(".floating-card");

if(floatingCard){

  let position = 0;

  setInterval(() => {

    position =
      position === 0 ? 15 : 0;

    floatingCard.style.transform =
      `translateY(${position}px)`;

  }, 2000);

}

// =========================================================
// HERO PARALLAX
// =========================================================

const heroImage =
  document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

  if(heroImage){

    const x =
      (window.innerWidth / 2 - e.pageX) / 50;

    const y =
      (window.innerHeight / 2 - e.pageY) / 50;

    heroImage.style.transform =
      `translate(${x}px, ${y}px)`;

  }

});

// =========================================================
// REVEAL ON SCROLL
// =========================================================

const revealItems = document.querySelectorAll(
  ".benefit-card, .plan-card, .about-image"
);

const revealOnScroll = () => {

  const trigger =
    window.innerHeight * 0.85;

  revealItems.forEach(item => {

    const top =
      item.getBoundingClientRect().top;

    if(top < trigger){

      item.classList.add("show");

    }

  });

};

window.addEventListener(
  "scroll",
  revealOnScroll
);

// =========================================================
// CURSOR GLOW
// =========================================================

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

window.addEventListener("mousemove", e => {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});

// =========================================================
// CONSOLE BRANDING
// =========================================================

console.log(`
╔══════════════════════════════════════╗
║                                      ║
║        APPLIK CARE PREMIUM UI        ║
║                                      ║
║    Modern Website Experience 2026    ║
║                                      ║
╚══════════════════════════════════════╝
`);