document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const music = document.getElementById("bg-music");

  const romanticBox = document.getElementById("romantic-box");
  const countdownEl = document.getElementById("countdown");
  const typingEl = document.getElementById("typing");
  const openLetterBtn = document.getElementById("open-letter");

  // 🌸 Soft vibration
  function softVibrate() {
    if (navigator.vibrate) {
      navigator.vibrate([80, 40, 80]);
    }
  }

  // 💖 YES button
  yesBtn.addEventListener("click", () => {
    softVibrate();

    music.volume = 0.7;
    music.play().catch(() => {});

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    romanticBox.style.display = "block";

    startCountdown(90); // 1.30 minutes
    startTyping();
  });

  // 🙈 NO button moves
  noBtn.addEventListener("click", () => {
    softVibrate();
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
  });

  // ⏳ Countdown
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

  // ✍️ Romantic typing
  function startTyping() {
    const text =
      "I didn’t rush this moment… I wanted every second to feel gentle, real, and full of love ❤️";

    let i = 0;
    typingEl.innerText = "";

    const typer = setInterval(() => {
      typingEl.innerText += text[i];
      i++;
      if (i >= text.length) clearInterval(typer);
    }, 80);
  }

  // 💌 Open love letter
  openLetterBtn.addEventListener("click", () => {
    softVibrate();
    setTimeout(() => {
      window.location.href = "./love-letter.html";
    }, 300);
  });
});
