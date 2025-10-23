// 📸 Step 1: Add all image names here (exactly as uploaded in your "Images" folder)
const imageList = [
  "WhatsApp Image 2025-10-04 at 12.27.00 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.27.07 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.27.59 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.28.02 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.05 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.08 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.15 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.21 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.21 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.22 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.22 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.22 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.23 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.23 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.23 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.24 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.24 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.24 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.25 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.25 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.25 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.26 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.26 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.26 PM (3).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.26 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.27 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.28 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.28 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.34 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.34 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.35 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.35 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.29.35 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.48 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.49 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.49 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.49 PM (3).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.49 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.50 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.50 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.50 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.51 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.51 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.51 PM (3).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.51 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.52 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.52 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.52 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.53 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.53 PM (2).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.53 PM.jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.54 PM (1).jpeg",
  "WhatsApp Image 2025-10-04 at 12.32.54 PM.jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.28 AM (1).jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.29 AM (1).jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.29 AM.jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.30 AM.jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.32 AM.jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.33 AM.jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.34 AM (1).jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.34 AM.jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.35 AM (1).jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.35 AM.jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.36 AM (1).jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.36 AM.jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.40 AM (1).jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.41 AM (1).jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.41 AM.jpeg",
  "WhatsApp Image 2025-10-23 at 12.03.42 AM.jpeg"
];

// 🎲 Step 2: Shuffle images randomly
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}
const shuffledImages = shuffle([...imageList]);

// 🩷 Step 3: Define all 26 days (without worrying about images)
const days = [
  { day: 1, date: "Wed Oct 01 2025", title: "The Beginning 💖", message: "To my healthy little Bub ❤️..." },
  { day: 2, date: "Thu Oct 02 2025", title: "The Smile 😊", message: "I adore how obsessed we are..." },
  { day: 3, date: "Fri Oct 03 2025", title: "Little Things 🌸", message: "It’s the little things..." },
  { day: 4, date: "Sat Oct 04 2025", title: "Our Laughter 🎶", message: "Every laugh we share..." },
  { day: 5, date: "Sun Oct 05 2025", title: "Sweet Chaos 🍫", message: "Life with you is sweet chaos..." },
  { day: 6, date: "Mon Oct 06 2025", title: "The Inside Jokes 🤭", message: "Only you and I, Bub..." },
  { day: 7, date: "Tue Oct 07 2025", title: "Lazy Days ☕", message: "Lazy mornings, coffee, cuddles..." },
  { day: 8, date: "Wed Oct 08 2025", title: "Firsts Together 💫", message: "Our firsts together..." },
  { day: 9, date: "Thu Oct 09 2025", title: "Dreaming Big ✨", message: "Bub, you make me believe..." },
  { day: 10, date: "Fri Oct 10 2025", title: "Perfect Mess 💕", message: "Even in chaos, Bub..." },
  { day: 11, date: "Sat Oct 11 2025", title: "Your Voice 🎧", message: "The way you say my name..." },
  { day: 12, date: "Sun Oct 12 2025", title: "Midnight Talks 🌙", message: "Our late-night talks..." },
  { day: 13, date: "Mon Oct 13 2025", title: "Adventures 🚗", message: "Every trip, every random plan..." },
  { day: 14, date: "Tue Oct 14 2025", title: "Little Teases 😜", message: "You tease me endlessly..." },
  { day: 15, date: "Wed Oct 15 2025", title: "Unspoken Words 🕊️", message: "Bub, remember that night..." },
  { day: 16, date: "Thu Oct 16 2025", title: "Heartbeats 💓", message: "That day on the wrong scooty..." },
  { day: 17, date: "Fri Oct 17 2025", title: "Forever Playlist 🎵", message: "Our Kankaria Lake boat ride..." },
  { day: 18, date: "Sat Oct 18 2025", title: "Comfort Zone 🛋️", message: "Random plans, Lal Bahug Cha Raja..." },
  { day: 19, date: "Sun Oct 19 2025", title: "Shared Dreams ☁️", message: "Bub, I love how you celebrate..." },
  { day: 20, date: "Mon Oct 20 2025", title: "Butterflies 🦋", message: "Lazy Sundays with nachos..." },
  { day: 21, date: "Tue Oct 21 2025", title: "Care & Chaos 💞", message: "Food hunts for our cravings..." },
  { day: 22, date: "Wed Oct 22 2025", title: "Together Always 💍", message: "Waiting for you outside your office..." },
  { day: 23, date: "Thu Oct 23 2025", title: "Magic Moments ✨", message: "Your cute drunk side..." },
  { day: 24, date: "Fri Oct 24 2025", title: "Love Notes 💌", message: "Random selfies from you..." },
  { day: 25, date: "Sat Oct 25 2025", title: "The Night Before 🌌", message: "Spontaneous rides, fun chaos..." },
  { day: 26, date: "Sun Oct 26 2025", title: "Happy Birthday My Love 🎂", message: "To my forever favorite person..." }
];

// 🎁 Step 4: Randomly assign images to each day
days.forEach((d, i) => {
  d.image = "Images/" + shuffledImages[i % shuffledImages.length];
});

// 🕰️ Step 5: Countdown + Popup Logic
const daysContainer = document.getElementById("days-container");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupImage = document.getElementById("popup-image");
const popupMessage = document.getElementById("popup-message");
const closeBtn = document.getElementById("close-btn");
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const target = new Date("Oct 26 2025 00:00:00");
  const diff = target - new Date();
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  countdown.innerText = `${d} days ${h} hrs to go 💫`;
}

function renderDays() {
  daysContainer.innerHTML = "";
  const today = new Date();
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
