async function loadConfig() {
  const res = await fetch('config.json');
  return await res.json();
}

function formatCountdown(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
  return `${days} days ${hrs} hrs to go 💫`;
}

function createDayCard(day, today) {
  const card = document.createElement("div");
  card.className = "day-card";
  const dayDate = new Date(day.date);
  const unlocked = today >= dayDate;

  card.innerHTML = `<div class="day-title">${day.title} ${!unlocked ? "🔒" : ""}</div>`;
  if (unlocked) card.addEventListener("click", () => showPopup(day));
  else card.classList.add("locked");

  return card;
}

function showPopup(day) {
  const popup = document.getElementById("popup");
  document.getElementById("popupImage").src = day.image;
  document.getElementById("popupText").innerHTML = day.lines.map(l => `<p>${l}</p>`).join("");
  popup.classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

async function init() {
  const config = await loadConfig();
  const today = new Date();
  const birthday = new Date(config.birthdayDate);
  document.getElementById("countdown").textContent = formatCountdown(birthday);

  const container = document.getElementById("daysContainer");
  config.days.forEach(day => {
    container.appendChild(createDayCard(day, today));
  });

  document.getElementById("closePopup").addEventListener("click", closePopup);
}

init();
