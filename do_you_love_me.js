const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const music = document.getElementById("bg-music");

yesBtn.addEventListener("click", () => {
  music.volume = 0.7;
  music.play(); // 🎵 start song

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  startRoses();

  // ⏳ WAIT 30 SECONDS before next page
  setTimeout(() => {
    window.location.href = "love-letter.html?v=2";
  }, 30000); // 30,000 ms = 30 seconds
});

noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// 🌹 Rose animation
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
