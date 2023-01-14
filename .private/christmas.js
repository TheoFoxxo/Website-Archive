const days = document.getElementById("days"),
  minutes = document.getElementById("minutes"),
  hours = document.getElementById("hours"),
  seconds = document.getElementById("seconds");
let xYear = 2020;
setInterval(() => {
  findDate();
}, 1000);

function findDate() {
  let currentTime = new Date(),
    christmasYear = currentTime.getFullYear();
  if (currentTime.getMonth() == 11 && currentTime.getDate() > 25) {
    christmasYear += 1;
  }
  let christmasTime = new Date(christmasYear, 11, 25);
  let dateDiff = Math.floor(christmasTime - currentTime);

  let DAYS = 0,
    HOURS = 0,
    MINUTES = 0,
    SECONDS = 0;

  if (
    currentTime.getMonth() != 11 ||
    (currentTime.getMonth() == 11 && currentTime.getDate() != 25)
  ) {
    DAYS = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    HOURS = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    MINUTES = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    SECONDS = Math.floor((dateDiff % (1000 * 60)) / 1000);
  }
  displayDate(
    setZero(DAYS),
    setZero(HOURS),
    setZero(MINUTES),
    setZero(SECONDS)
  );
}

function displayDate(d, h, m, s) {
  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

function setZero(timeValue) {
  if (timeValue < 10) {
    timeValue = "0" + timeValue;
  }
  return timeValue;
}
