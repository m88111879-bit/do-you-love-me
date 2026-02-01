const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const music = document.getElementById("bg-music");

yesBtn.addEventListener("click", () => {
  music.volume = 0.6;   // lower volume (optional)
  music.play();        // 🎵 play music

  // show message WITHOUT reloading page
  document.querySelector("h1").innerText = "I love you so much 😍";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("touchstart", () => {
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
