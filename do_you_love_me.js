const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const music = document.getElementById("bg-music");

const romanticBox = document.getElementById("romantic-box");
const countdownEl = document.getElementById("countdown");
const typingEl = document.getElementById("typing");

/* 🌙 FULL English Poetry */
const englishPoem = [
  "In","the","moonlit","dance","of","whispered","dreams,",
  "Our","hearts","entwined,","a","symphony","it","seems.",
  "Your","gaze,","a","constellation","in","night's","embrace,",
  "Each","moment","with","you,","a","timeless","grace.",

  "Eternal","whispers","on","a","gentle","breeze,",
  "Your","laughter,","a","melody","that","puts","my","heart","at","ease.",
  "In","your","eyes,","I","find","a","universe","untold,",
  "A","love","story","written","in","stars","of","gold.",

  "Together","we","waltz","on","the","shores","of","desire,",
  "Igniting","flames","that","passion","inspires.",
  "Your","touch,","a","sonnet","on","my","skin,",
  "A","love","so","deep,","where","do","I","begin?",

  "Through","the","pages","of","our","shared","refrain,",
  "In","your","arms,","life's","worries","wane.",
  "For","in","this","dance","of","hearts","and","rhymes,",
  "We","find","a","love","that","transcends","all","times.","❤️","❤️",
];

/* ❤️ YES button */
yesBtn.addEventListener("click", () => {
  music.volume = 0.7;
  music.play();

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  romanticBox.style.display = "block";

  startRoses();
  startCountdown(90); // ⏳ 1 min 30 sec
  typeWords(englishPoem);
});

/* 😜 NO button逃 */
noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* 🌹 Falling roses */
function startRoses() {
  setInterval(() => {
    const rose = document.createElement("div");
    rose.innerHTML = "🌹";
    rose.className = "rose";
    rose.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(rose);
    setTimeout(() => rose.remove(), 5000);
  }, 400);
}

/* ⏳ Countdown */
function startCountdown(seconds) {
  let time = seconds;
  countdownEl.innerText = `⏳ ${time}`;

  const timer = setInterval(() => {
    time--;
    countdownEl.innerText = `⏳ ${time}`;

    if (time <= 0) {
      clearInterval(timer);
      window.location.href = "love-letter.html";
    }
  }, 1000);
}

/* 💌 Word-by-word typing */
function typeWords(words) {
  let i = 0;
  const typer = setInterval(() => {
    typingEl.innerHTML += words[i] + " ";
    i++;
    if (i >= words.length) {
      clearInterval(typer);
    }
  }, 600); // smooth romantic speed
}
