async function loadConfig() {
  const response = await fetch("config.json");
  return await response.json();
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
  const isUnlocked = today >= dayDate;

  card.innerHTML = `
    <div class="day-title">${day.title} ${!isUnlocked ? "🔒" : ""}</div>
  `;

  if (isUnlocked) {
    card.addEventListener("click", () => showPopup(day));
  } else {
    card.classList.add("locked");
  }

  return card;
}

function showPopup(day) {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popupImage");
  const text = document.getElementById("popupText");

  img.src = day.image;
  text.innerHTML = day.lines.map(l => `<p>${l}</p>`).join("");
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

  const daysContainer = document.getElementById("daysContainer");
  config.days.forEach(day => {
    daysContainer.appendChild(createDayCard(day, today));
  });

  document.getElementById("closePopup").addEventListener("click", closePopup);
}

init();
