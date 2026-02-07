const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const music = document.getElementById("bg-music");

const romanticBox = document.getElementById("romantic-box");
const countdownEl = document.getElementById("countdown");
const typingEl = document.getElementById("typing");

const text =
  "Every moment with you feels like a beautiful dream. " +
  "Your smile is my favorite place to stay, " +
  "your presence my calm, " +
  "and your love my forever. 🌹❤️";

yesBtn.addEventListener("click", () => {
  music.volume = 0.7;
  music.play(); // 🎵 start music

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  romanticBox.style.display = "block";
  startRoses();
  startCountdown(30);
  typeWords(text.split(" "));
});

noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// 🌹 Falling roses
function startRoses() {
  setInterval(() => {
    const rose = document.createElement("div");
    rose.innerHTML = "🌹";
    rose.className = "rose";
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.fontSize = "24px";
    document.body.appendChild(rose);

    setTimeout(() => rose.remove(), 5000);
  }, 400);
}

// ⏳ Countdown
function startCountdown(seconds) {
  let time = seconds;
  countdownEl.innerText = `⏳ ${time}`;

  const timer = setInterval(() => {
    time--;
    countdownEl.innerText = `⏳ ${time}`;

    if (time <= 0) {
      clearInterval(timer);
      window.location.href = "love-letter.html?v=3";
    }
  }, 1000);
}

// 💌 Word-by-word typing
function typeWords(words) {
  let i = 0;
  const typer = setInterval(() => {
    typingEl.innerHTML += words[i] + " ";
    i++;
    if (i >= words.length) clearInterval(typer);
  }, 400);
}
