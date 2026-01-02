document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lectures = btn.nextElementSibling;

    if (!lectures) return; // حماية

    lectures.classList.toggle("open");
    lectures.style.display =
      lectures.style.display === "block" ? "none" : "block";
  });
});
const subjects = [
  {
    name: "مبادئ إدارة",
    lectures: [
      {
        title: "محاضرة 1",
        link: "https://example.com"
      },
      {
        title: "محاضرة 2",
        link: "https://example.com"
      }
    ]
  }
];
document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  if (!modal || !overlay || !openBtn || !closeBtn) return;

  openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  function closeModal() {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

});
function goHome() {
  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "index.html";
  }, 300);
}
/* ===== View Button Ripple ===== */
document.querySelectorAll(".view-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    const ripple = document.createElement("span");
    ripple.className = "ripple";

    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});
