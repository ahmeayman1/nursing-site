/* ===== Dark Mode ===== */
const darkBtn = document.getElementById("darkToggle");
if (darkBtn) {
  darkBtn.onclick = () => {
    document.body.classList.toggle("dark");
    darkBtn.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  };
}

/* ===== Menu ===== */
const menuBtn = document.getElementById("menuBtn");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

if (menuBtn && menu && overlay) {
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
    overlay.classList.toggle("active");
  });
  
  overlay.addEventListener("click", closeAll);
  menu.addEventListener("click", closeAll);
}

/* ===== Scroll Reveal ===== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal, .icon-reveal")
  .forEach(el => observer.observe(el));

/* ===== Scroll To Top ===== */
const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("show", window.scrollY > 300);
  });
  
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}



/* ===== Close All ===== */
function closeAll() {
  if (menu) menu.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
}
document.querySelectorAll(".page-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = this.href;
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = target;
    }, 400);
  });
});
