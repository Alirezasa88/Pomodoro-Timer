let timer = document.querySelector(".timer");
let timerBtn = document.querySelector(".timerBtn");

let timeLeft = 60 * 25;
let countdown;

function startTimer() {
  if (countdown) return;

  countdown = setInterval(() => {
    timeLeft--;

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    if (seconds < 10) seconds = "0" + seconds;

    timer.textContent = `${minutes}:${seconds}`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert = `زمان تمام شد⏰`;
    }
  }, 1000);
}

timerBtn.addEventListener("click", function () {
  startTimer();
  let stopeBtn = document.createElement("button");
  if (!document.querySelector(".stopBtn")) {
    stopeBtn.textContent = "پایان";
    stopeBtn.classList.add("stopBtn")
    let box = document.querySelector(".box");
    box.appendChild(stopeBtn);
  }
  
  stopeBtn.addEventListener("click", () => {
    clearInterval(countdown)
    countdown = null;
    timeLeft = 60 * 25;
    timer.textContent = "25:00"
    stopeBtn.remove()
  })
});
