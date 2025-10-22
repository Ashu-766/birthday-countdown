// === Configuration ===
const birthdayDate = new Date("2025-10-26T00:00:00"); // 🎂 Actual birthday date

// === Countdown timer ===
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

// === Load daily messages ===
fetch("days.json")
  .then(response => response.json())
  .then(daysData => {
    const now = new Date();
    const startDate = new Date("2025-10-01T00:00:00");
    const diffDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const todayData = daysData.find(d => d.day === diffDays);

    const card = document.getElementById("day-content");
    if (todayData) {
      card.innerHTML = `
        <h3>Day ${todayData.day}</h3>
        <p>${todayData.message}</p>
        ${todayData.image ? `<img src="${todayData.image}" alt="Day ${todayData.day}">` : ""}
      `;
    } else {
      card.innerHTML = `<p>✨ Waiting for the countdown to start on Oct 1 ✨</p>`;
    }
  })
  .catch(error => {
    console.error("Error loading JSON:", error);
    document.getElementById("day-content").innerText = "Failed to load content.";
  });
