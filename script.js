async function loadConfig() {
  const res = await fetch('config.json', { cache: 'no-store' });
  return await res.json();
}

function countdown() {
  const target = new Date("2025-10-26T00:00:00");
  const now = new Date();
  const diff = target - now;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById('countdown').innerText =
    `${d} days ${h} hrs to go 💫`;
}

function openModal(day) {
  document.getElementById('modalTitle').innerText = day.label;
  document.getElementById('modalImage').src = day.image || '';
  document.getElementById('modalText').innerText = day.text;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

loadConfig().then(cfg => {
  const today = new Date();
  const daysContainer = document.getElementById('days');
  cfg.days.forEach(d => {
    const card = document.createElement('div');
    card.className = 'day-card';
    const dayDate = new Date(d.date);
    card.innerHTML = `<strong>${d.label}</strong>`;
    if (dayDate <= today) {
      card.onclick = () => openModal(d);
    } else {
      card.classList.add('locked');
    }
    daysContainer.appendChild(card);
  });
});

setInterval(countdown, 60000);
countdown();
