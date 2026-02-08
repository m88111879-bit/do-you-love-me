document.addEventListener("DOMContentLoaded", () => {
  alert("JS loaded ✅"); // 🔴 TEMP TEST — MUST POP UP

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bg-music");
  const romanticBox = document.getElementById("romantic-box");
  const countdownEl = document.getElementById("countdown");
  const typingEl = document.getElementById("typing");
  const openLetterBtn = document.getElementById("open-letter");

  function softVibrate() {
    if (navigator.vibrate) {
      navigator.vibrate([80, 40, 80]);
    }
  }

  yesBtn.addEventListener("click", () => {
    alert("YES clicked 💖"); // 🔴 TEMP TEST
    softVibrate();

    music.volume = 0.7;
    music.play().catch(() => {});

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    romanticBox.style.display = "block";

    startCountdown(90);
    startTyping();
  });

  noBtn.addEventListener("click", () => {
    softVibrate();
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
  });

  function startCountdown(seconds) {
    let time = seconds;
    countdownEl.innerText = `⏳ ${time}`;

    const timer = setInterval(() => {
      time--;
      countdownEl.innerText = `⏳ ${time}`;

      if (time <= 0) {
        clearInterval(timer);
        countdownEl.innerText = "💖";
        openLetterBtn.style.display = "inline-block";
      }
    }, 1000);
  }

  function startTyping() {
    const text =
      "I wrote this slowly, softly, and honestly… because you matter to me ❤️";
    let i = 0;
    typingEl.innerText = "";

    const typer = setInterval(() => {
      typingEl.innerText += text[i];
      i++;
      if (i >= text.length) clearInterval(typer);
    }, 80);
  }

  openLetterBtn.addEventListener("click", () => {
    softVibrate();
    window.location.href = "love-letter.html";
  });
});
