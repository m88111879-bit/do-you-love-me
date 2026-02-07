const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const music = document.getElementById("bg-music");
const question = document.getElementById("question");

yesBtn.addEventListener("click", () => {
  music.volume = 0.7;
  music.play();

  question.innerText = "എനിക്ക് നിന്നെ വളരെ ഇഷ്ടമാണ് 😚❤️";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  startHearts();

  setTimeout(() => {
    window.location.href = "love-letter.html?v=1";
  }, 5000);
});

noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * 140 - 70;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function startHearts() {
  setInterval(() => {
    const rose = document.createElement("div");
    rose.innerHTML = "🌹";
    rose.style.position = "fixed";
    rose.style.top = "-20px";
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.fontSize = "24px";
    rose.style.animation = "fall 5s linear";
    document.body.appendChild(rose);

    setTimeout(() => rose.remove(), 5000);
  }, 400);
}
