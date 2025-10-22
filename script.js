const days = [
  { day: 1, date: "Wed Oct 01 2025", title: "The Beginning 💖", image: "https://picsum.photos/400?1", message: "Every beautiful story has a beginning, and ours started with a spark that still glows." },
  { day: 2, date: "Thu Oct 02 2025", title: "The Smile 😊", image: "https://picsum.photos/400?2", message: "Your smile is my sunrise. Every morning feels brighter because of you." },
  { day: 3, date: "Fri Oct 03 2025", title: "Little Things 🌸", image: "https://picsum.photos/400?3", message: "It’s the little things — the texts, the laughs, the warmth — that make you unforgettable." },
  { day: 4, date: "Sat Oct 04 2025", title: "Our Laughter 🎶", image: "https://picsum.photos/400?4", message: "Every laugh we share is a melody that plays in my heart all day long." },
  { day: 5, date: "Sun Oct 05 2025", title: "Sweet Chaos 🍫", image: "https://picsum.photos/400?5", message: "Life with you is sweet chaos — messy, funny, real, and perfect." },
  { day: 6, date: "Mon Oct 06 2025", title: "The Inside Jokes 🤭", image: "https://picsum.photos/400?6", message: "Only you and I get those weird jokes that no one else ever will!" },
  { day: 7, date: "Tue Oct 07 2025", title: "Lazy Days ☕", image: "https://picsum.photos/400?7", message: "Some days are made for nothing but coffee, cuddles, and your company." },
  { day: 8, date: "Wed Oct 08 2025", title: "Firsts Together 💫", image: "https://picsum.photos/400?8", message: "Our firsts will always stay golden — the first smile, the first call, the first 'I miss you'." },
  { day: 9, date: "Thu Oct 09 2025", title: "Dreaming Big ✨", image: "https://picsum.photos/400?9", message: "You make me believe in dreams — not the sleeping kind, the living kind." },
  { day: 10, date: "Fri Oct 10 2025", title: "Perfect Mess 💕", image: "https://picsum.photos/400?10", message: "Even in chaos, you’re my calm. Even in noise, you’re my song." },
  { day: 11, date: "Sat Oct 11 2025", title: "Your Voice 🎧", image: "https://picsum.photos/400?11", message: "The way you say my name makes ordinary moments sound like poetry." },
  { day: 12, date: "Sun Oct 12 2025", title: "Midnight Talks 🌙", image: "https://picsum.photos/400?12", message: "Our late-night talks are better than sleep. I could listen to you forever." },
  { day: 13, date: "Mon Oct 13 2025", title: "Adventures 🚗", image: "https://picsum.photos/400?13", message: "Every trip, every random plan with you — turns into my favorite story." },
  { day: 14, date: "Tue Oct 14 2025", title: "Little Teases 😜", image: "https://picsum.photos/400?14", message: "You tease me endlessly, but it’s my favorite kind of love language." },
  { day: 15, date: "Wed Oct 15 2025", title: "Unspoken Words 🕊️", image: "https://picsum.photos/400?15", message: "Even silence feels like a conversation when it’s with you." },
  { day: 16, date: "Thu Oct 16 2025", title: "Heartbeats 💓", image: "https://picsum.photos/400?16", message: "Somewhere between your laugh and your eyes, I found my home." },
  { day: 17, date: "Fri Oct 17 2025", title: "Forever Playlist 🎵", image: "https://picsum.photos/400?17", message: "Every song reminds me of a moment with you. Our love has a soundtrack." },
  { day: 18, date: "Sat Oct 18 2025", title: "Comfort Zone 🛋️", image: "https://picsum.photos/400?18", message: "You’re my peace after a long day — my favorite safe place." },
  { day: 19, date: "Sun Oct 19 2025", title: "Shared Dreams ☁️", image: "https://picsum.photos/400?19", message: "We don’t just dream together — we build them, piece by piece." },
  { day: 20, date: "Mon Oct 20 2025", title: "Butterflies 🦋", image: "https://picsum.photos/400?20", message: "Still get butterflies, still get shy — still fall for you every day." },
  { day: 21, date: "Tue Oct 21 2025", title: "Care & Chaos 💞", image: "https://picsum.photos/400?21", message: "Even when we fight, it’s because we care. Love wins, always." },
  { day: 22, date: "Wed Oct 22 2025", title: "Together Always 💍", image: "https://picsum.photos/400?22", message: "No matter where we go, my heart’s always walking beside yours." },
  { day: 23, date: "Thu Oct 23 2025", title: "Magic Moments ✨", image: "https://picsum.photos/400?23", message: "Life sprinkled magic the day you entered mine." },
  { day: 24, date: "Fri Oct 24 2025", title: "Love Notes 💌", image: "https://picsum.photos/400?24", message: "If I could, I’d write your name on every star." },
  { day: 25, date: "Sat Oct 25 2025", title: "The Night Before 🌌", image: "https://picsum.photos/400?25", message: "Tomorrow is yours — but my heart’s been yours all along." },
  { day: 26, date: "Sun Oct 26 2025", title: "Happy Birthday My Love 🎂", image: "https://picsum.photos/400?26", message: "To my forever favorite person — Happy Birthday, Minnu. You’re my today and all my tomorrows." }
];

const daysContainer = document.getElementById("days-container");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImage = document.getElementById("popup-image");
const popupMessage = document.getElementById("popup-message");
const closeBtn = document.getElementById("close-btn");
const countdown = document.getElementById("countdown");

const today = new Date();

function updateCountdown() {
  const target = new Date("Oct 26 2025 00:00:00");
  const diff = target - today;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  countdown.innerText = `${d} days ${h} hrs to go 💫`;
}

function renderDays() {
  daysContainer.innerHTML = "";
  days.forEach(day => {
    const dayDate = new Date(day.date);
    const card = document.createElement("div");
    card.className = "day-card";

    if (today >= dayDate) {
      card.innerHTML = `<h3>Day ${day.day} - ${day.date}</h3><p>${day.title}</p>`;
      card.addEventListener("click", () => openPopup(day));
    } else {
      card.classList.add("locked");
      card.innerHTML = `<h3>Day ${day.day}</h3><p>🔒 Locked till ${day.date}</p>`;
    }

    daysContainer.appendChild(card);
  });
}

function openPopup(day) {
  popupTitle.textContent = `${day.title} (${day.date})`;
  popupImage.src = day.image;
  popupMessage.textContent = day.message;
  popup.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => popup.classList.add("hidden"));

updateCountdown();
renderDays();
