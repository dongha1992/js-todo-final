const clock = document.querySelector(".time-container");
const yearAndMonthSpan = document.querySelector("h1");
const hoursAndMinutes = document.querySelector("h2");
const monthObj = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec"
};

function getCurrentTime() {
  const date = new Date();
  const years = date.getFullYear();
  const months = date.getMonth();
  const dates = date.getDay();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  motnhs = this.motnhs;

  yearAndMonthSpan.innerText = `${days} ${months} ${years}`;
  hoursAndMinutes.innerText = `${hours < 10 ? `0${hours}` : hours} ${
    minutes < 10 ? `0${minutes}` : minutes
  } ${seconds < 10 ? `0${seconds}` : seconds}`;
  setTimeout(getCurrentTime, 1000);
}

getCurrentTime();
