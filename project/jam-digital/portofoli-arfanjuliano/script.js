document.addEventListener("DOMContentLoaded", () => {
  // Typing Effect
  const typingEl = document.getElementById("typing");
  const texts = [
    "Portofolio ini adalah salah satu pembelajaran saya untuk praktik.",
    "ini adalah portofolio yang saya upgrade dari portofolio sebelumnya.",
  ];
  let tIdx = 0,
    chIdx = 0,
    forward = true;

  function tick() {
    const txt = texts[tIdx];
    if (forward) {
      chIdx++;
      if (chIdx > txt.length) {
        forward = false;
        setTimeout(tick, 900);
        return;
      }
    } else {
      chIdx--;
      if (chIdx < 0) {
        forward = true;
        tIdx = (tIdx + 1) % texts.length;
        setTimeout(tick, 300);
        return;
      }
    }
    typingEl.textContent = txt.slice(0, chIdx);
    setTimeout(tick, forward ? 35 : 18);
  }
  tick();

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        document
          .querySelector(href)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Reveal Animation
  const reveals = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((r) => io.observe(r));

  // Scroll Top Button
  const scrollTop = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 360) scrollTop.classList.add("show");
    else scrollTop.classList.remove("show");
  });
  scrollTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // Fullscreen Particles Fix
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 120, density: { enable: true, value_area: 900 } },
        color: { value: "#00f7ff" },
        shape: { type: "circle" },
        opacity: { value: 0.6, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00f7ff",
          opacity: 0.3,
          width: 1,
        },
        move: { enable: true, speed: 1.2 },
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
      retina_detect: true,
    });
  }

  // ✅ Slider Sertifikat
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  let currentIndex = 0;

  function showSlide(index) {
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  });
});

// ✅ Hamburger menu di luar DOMContentLoaded
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Tutup menu kalau link diklik
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

document
  .getElementById("sendToWhatsApp")
  .addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
      alert("Harap isi semua kolom dulu ya!");
      return;
    }

    const phoneNumber = "6285122958697"; 
    const text = `Halo Arfan, saya ${name}%0AEmail: ${email}%0APesan: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  });
const icons = document.querySelectorAll(".langs-box .icon");
  const namaBahasa = document.getElementById("namaBahasa");

  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      const nama = icon.getAttribute("data-name");
      namaBahasa.textContent = nama;
      namaBahasa.style.opacity = 1;
    });
  });