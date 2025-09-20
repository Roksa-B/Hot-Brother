// Таймер
const targetDate = new Date("2025-10-21T20:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} дн 🌍 ${hours} год ⏰ ${minutes} хв 🕒 ${seconds} сек 🔥`;

  if (distance < 0) {
    countdown.innerHTML = "Гарячий Братчик приїхав!😋";
  }
}, 1000);

// Літаючі емоджі
const emojis = ["✨","🔥","🌙","💫","🎈","🚀"];
function createEmoji() {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw"; // випадкова позиція
  emoji.style.animationDuration = (3 + Math.random() * 5) + "s"; // швидкість
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 8000); // видалити після анімації
}
setInterval(createEmoji, 700); // нове емоджі кожні 0.7 сек
