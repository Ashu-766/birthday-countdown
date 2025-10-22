const birthdayDate = new Date("2025-10-26T00:00:00");
const startDate = new Date("2025-10-01T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = birthdayDate - now;
  if (diff <= 0) {
    document.getElementById("countdown").innerText = "🎉 It's Minnu's Birthday Today! 🥳";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("countdown").innerText = `${days} days ${hours} hrs to go 💫`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

fetch("days.json")
  .then(res => res.json())
  .then(daysData => {
    const container = document.getElementById("days-container");
    container.innerHTML = "";

    const today = new Date();
    const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)) + 1;

    daysData.forEach(day => {
      const card = document.createElement("div");
      card.className = "day-card";
      card.innerHTML = `<strong>Day ${day.day} — ${day.label}</strong>`;
      if (day.day > diffDays) {
        card.classList.add("locked");
      } else {
        card.addEventListener("click", () => openModal(day));
      }
      container.appendChild(card);
    });
  });

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalMessage = document.getElementById("modal-message");
const closeBtn = document.getElementById("closeBtn");

function openModal(day) {
  modalTitle.innerText = `Day ${day.day} — ${day.label}`;
  modalImage.src = day.image;
  modalMessage.innerText = day.message;
  modal.style.display = "flex";
}

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };
