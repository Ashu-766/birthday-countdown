// Day Data
const days = [
  { day: 1, date: "Wed Oct 01 2025", title: "The Beginning 💖", image: "https://picsum.photos/400?1", message: "To my healthy little Bub ❤️. I love how you take care of yourself, eat properly, and stay hydrated. It makes me so happy knowing you listen to me. I know I can be a dumbass sometimes, but I promise to be the sweet boyfriend you deserve. One more day down, wohooo!!!" },
  { day: 2, date: "Thu Oct 02 2025", title: "The Smile 😊", image: "https://picsum.photos/400?2", message: "I adore how obsessed we are with each other, Bub 🥰. It’s like two lovebirds who just can’t be separated. You never get bored of me, and I feel so lucky. One more day down, my sugar buns, let’s goooo!" },
  { day: 3, date: "Fri Oct 03 2025", title: "Little Things 🌸", image: "https://picsum.photos/400?3", message: "It’s the little things — the texts, the laughs, the warmth — that make you unforgettable, Bub. You brighten my every day." },
  { day: 4, date: "Sat Oct 04 2025", title: "Our Laughter 🎶", image: "https://picsum.photos/400?4", message: "Every laugh we share is a melody in my heart, Bub. I love how we can be silly together and enjoy every moment." },
  { day: 5, date: "Sun Oct 05 2025", title: "Sweet Chaos 🍫", image: "https://picsum.photos/400?5", message: "Life with you is sweet chaos, Bub — messy, funny, real, and perfect. I cherish every moment with you." },
  { day: 6, date: "Mon Oct 06 2025", title: "The Inside Jokes 🤭", image: "https://picsum.photos/400?6", message: "Only you and I, Bub, get those weird inside jokes that no one else will ever understand. They make me grin every time." },
  { day: 7, date: "Tue Oct 07 2025", title: "Lazy Days ☕", image: "https://picsum.photos/400?7", message: "Lazy mornings, coffee, cuddles, and your company — that’s my happiness, Bub. You make ordinary days feel magical." },
  { day: 8, date: "Wed Oct 08 2025", title: "Firsts Together 💫", image: "https://picsum.photos/400?8", message: "Our firsts together — first hug, first laugh, first 'I miss you' — will always stay golden, Bub. I treasure every one." },
  { day: 9, date: "Thu Oct 09 2025", title: "Dreaming Big ✨", image: "https://picsum.photos/400?9", message: "Bub, you make me believe in living dreams. Every idea and plan feels exciting because you’re by my side." },
  { day: 10, date: "Fri Oct 10 2025", title: "Perfect Mess 💕", image: "https://picsum.photos/400?10", message: "Even in chaos, Bub, you’re my calm. Even in noise, you’re my song. I love us, perfectly messy together." },
  { day: 11, date: "Sat Oct 11 2025", title: "Your Voice 🎧", image: "https://picsum.photos/400?11", message: "The way you say my name, Bub, makes every moment feel poetic. I could listen to you forever." },
  { day: 12, date: "Sun Oct 12 2025", title: "Midnight Talks 🌙", image: "https://picsum.photos/400?12", message: "Our late-night talks, Bub, are better than sleep. I could lie here and listen to you forever." },
  { day: 13, date: "Mon Oct 13 2025", title: "Adventures 🚗", image: "https://picsum.photos/400?13", message: "Every trip, every random plan with you, Bub, turns into my favorite story. Life’s an adventure with you." },
  { day: 14, date: "Tue Oct 14 2025", title: "Little Teases 😜", image: "https://picsum.photos/400?14", message: "You tease me endlessly, Bub, and I secretly love every moment. It’s my favorite kind of love language." },
  { day: 15, date: "Wed Oct 15 2025", title: "Unspoken Words 🕊️", image: "https://picsum.photos/400?15", message: "Bub, remember that night we went on a Sharma hunt at 3 AM? We got nothing and had pav and egg, laughing so much. Even silence with you feels like a conversation." },
  { day: 16, date: "Thu Oct 16 2025", title: "Heartbeats 💓", image: "https://picsum.photos/400?16", message: "That day on the wrong scooty when you hurt your foot, Bub — our bond grew so strong. We rested, went to the temple, and I loved every moment with you." },
  { day: 17, date: "Fri Oct 17 2025", title: "Forever Playlist 🎵", image: "https://picsum.photos/400?17", message: "Our Kankaria Lake boat ride, Bub — when you screamed so loudly I almost lost my hearing! You’re so cute, even when scared. That ride is unforgettable." },
  { day: 18, date: "Sat Oct 18 2025", title: "Comfort Zone 🛋️", image: "https://picsum.photos/400?18", message: "Random plans, Lal Bahug Cha Raja in Mumbai, Bub — the laughter, the fun, the memories — it’s our comfort zone, just us being us." },
  { day: 19, date: "Sun Oct 19 2025", title: "Shared Dreams ☁️", image: "https://picsum.photos/400?19", message: "Bub, I love how you celebrate little moments, like my random stories — you make each one special. Sharing dreams with you is my favorite." },
  { day: 20, date: "Mon Oct 20 2025", title: "Butterflies 🦋", image: "https://picsum.photos/400?20", message: "Lazy Sundays with nachos, skincare, relaxing, and baths — Bub, these simple moments with you give me butterflies every time." },
  { day: 21, date: "Tue Oct 21 2025", title: "Care & Chaos 💞", image: "https://picsum.photos/400?21", message: "Food hunts for our cravings, Bub — spontaneous and messy, but I love them. Every moment with you is a chaotic joy." },
  { day: 22, date: "Wed Oct 22 2025", title: "Together Always 💍", image: "https://picsum.photos/400?22", message: "Waiting for you outside your office, Bub, and seeing your smile — it melts my stress away. Together always, no matter what." },
  { day: 23, date: "Thu Oct 23 2025", title: "Magic Moments ✨", image: "https://picsum.photos/400?23", message: "Your cute drunk side, Bub — messy, adorable, and hilarious. Magic moments are everywhere with you." },
  { day: 24, date: "Fri Oct 24 2025", title: "Love Notes 💌", image: "https://picsum.photos/400?24", message: "Random selfies from you, Bub, make my heart flutter. I love your little quirks and your sweet surprises." },
  { day: 25, date: "Sat Oct 25 2025", title: "The Night Before 🌌", image: "https://picsum.photos/400?25", message: "Spontaneous rides, fun chaos, and little adventures, Bub — every memory with you makes me fall in love again." },
  { day: 26, date: "Sun Oct 26 2025", title: "Happy Birthday My Love 🎂", image: "https://picsum.photos/400?26", message: "To my forever favorite person, Bub — Happy Birthday, Minnu. You’re my today and all my tomorrows. I love you endlessly." }
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
