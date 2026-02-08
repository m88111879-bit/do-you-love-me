// ===== Get elements =====
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bg-music");

const romanticBox = document.getElementById("romantic-box");
const countdownEl = document.getElementById("countdown");
const poemEl = document.getElementById("typing");
const openLetterBtn = document.getElementById("open-letter");

// ===== Soft vibration =====
function softVibrate() {
  if (navigator.vibrate) {
    navigator.vibrate([60, 30, 60]);
  }
}

// ===== NO button playful escape =====
noBtn.addEventListener("click", () => {
  softVibrate();
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

// ===== YES button =====
yesBtn.addEventListener("click", () => {
  softVibrate();

  music.volume = 0.7;
  music.play();

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  romanticBox.style.display = "block";

  startCountdown(75); // 1 minute 15 seconds
  startPoemTyping();
  startHearts();
});

// ===== Countdown (1:15) =====
function startCountdown(seconds) {
  let time = seconds;

  const timer = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    sec = sec < 10 ? "0" + sec : sec;

    countdownEl.innerText = `⏳ ${min}:${sec}`;
    time--;

    if (time < 0) {
      clearInterval(timer);
      countdownEl.innerText = "💖";
      openLetterBtn.style.display = "inline-block";
    }
  }, 1000);
}

// ===== Word-by-word English poem =====
function startPoemTyping() {
  const poemText = `
In the moonlit dance of whispered dreams,
Our hearts entwined, a symphony it seems.
Your gaze, a constellation in night’s embrace,
Each moment with you, a timeless grace.

Eternal whispers on a gentle breeze,
Your laughter, a melody that puts my heart at ease.
In your eyes, I find a universe untold,
A love story written in stars of gold.

Together we waltz on the shores of desire,
Igniting flames that passion inspires.
Your touch, a sonnet on my skin,
A love so deep, where do I begin?

Through the pages of our shared refrain,
In your arms, life’s worries wane.
For in this dance of hearts and rhymes,
We find a love that transcends all times.
  `;

  const words = poemText.split(" ");
  poemEl.innerHTML = "";
  let i = 0;

  const typer = setInterval(() => {
    poemEl.innerHTML += words[i] + " ";
    i++;
    if (i >= words.length) clearInterval(typer);
  }, 180); // romantic speed
}

// ===== Floating hearts =====
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 6s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 800);
}

// ===== Open love letter page =====
openLetterBtn.addEventListener("click", () => {
  softVibrate();
  setTimeout(() => {
    window.location.href = "love-letter.html";
  }, 300);
});
