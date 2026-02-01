const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const music = document.getElementById("bg-music");

yesBtn.onclick = () => {
  music.play(); // 🎵 music starts here
  document.body.innerHTML = "<h1>I love you so much 😍</h1>";
};

noBtn.onmouseover = () => {
  const x = Math.random() * 100 - 50;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
};
