const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const music = document.getElementById("bg-music");
const question = document.getElementById("question");

yesBtn.addEventListener("click", () => {
  music.volume = 0.7;
  music.play();

  question.innerText = "I love you so much 😍❤️";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  startHearts();

  // Go to love letter page after 5 seconds
  setTimeout(() => {
    window.location.href = "love-letter.html";
  }, 5000);
});

noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * 140 - 70;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// 💓 Floating hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 300);
}
