const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let interval;
  return (seconds) => {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(() => {
      if (seconds === 0) clearInterval(interval);
      const mins = Math.floor((seconds / 60) % 60);
      const hours = Math.floor((seconds / 3600) % 24);
      const secs = Math.floor(seconds % 60);
      timerEl.innerHTML =
        String(hours).padStart(2, "0") +
        ":" +
        String(mins).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0");
      --seconds;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", (e) => {
  const value = e.target.value;
  e.target.value = value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = "";
});
