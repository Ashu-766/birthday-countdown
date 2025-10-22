const birthdayDate = new Date("2025-10-26T00:00:00");
const startDate = new Date("2025-10-01T00:00:00");

// === Countdown ===
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

// === Load JSON and Display All Days ===
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
      if (day.day > diffDays) card.classList.add("locked");

      const content = `
        <h3>Day ${day.day} — ${day.date}</h3>
        <p>${day.message}</p>
        ${day.image ? `<img src="${day.image}" alt="Day ${day.day}">` : ""}
      `;
      card.innerHTML = content;
      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById("days-container").innerText = "Failed to load content.";
  });
