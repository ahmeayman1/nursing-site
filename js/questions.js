const subjectsContainer = document.getElementById("subjectsContainer");

fetch("data/subjects.json")
  .then(res => res.json())
  .then(subjects => {
    subjects.forEach(subject => createSubjectCard(subject));
  });
function goBack() {
  window.history.back();
}
function createSubjectCard(subject) {
  const card = document.createElement("div");
  card.className = "subject-card";

  card.innerHTML = `
    <h2>${subject.icon} ${subject.name}</h2>
    <p>اختر المحاضرة</p>
    <button class="view-btn">View</button>
  `;

  const modal = createModal(subject);
  card.querySelector(".view-btn").onclick = () => openModal(modal);

  subjectsContainer.appendChild(card);
  document.body.appendChild(modal);
}

function createModal(subject) {
  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal-header">
      <h3>${subject.icon} ${subject.name}</h3>
      <span class="close-btn">✖</span>
    </div>
    <div class="modal-content">
      ${subject.lectures.map(l => `
        <a class="lecture-item"
           href="quiz.html?subject=${subject.id}&lecture=${l.file}">
           📍 ${l.title}
        </a>
      `).join("")}
    </div>
  `;

  modal.querySelector(".close-btn").onclick = () => closeModal(modal);
  return modal;
}

/* ===== Modal Control ===== */


function openModal(modal) {
  modal.classList.add("active");

  if (overlay) {
    overlay.classList.add("active");
    overlay.onclick = () => closeModal(modal);
  }
}

function closeModal(modal) {
  modal.classList.remove("active");

  if (overlay) {
    overlay.classList.remove("active");
  }
}