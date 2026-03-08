const clock = document.querySelector(".clock");
const span = document.querySelector(".milliseconds");

function updateTime() {
  // Get the current date and time
  const now = new Date();
  console.log(now);

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();

  console.log(hours, minutes, seconds);

  // Add leading zero to single digit values
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds = Math.floor(milliseconds / 100);

  const timeString = `${hours}:${minutes}:${seconds}`;

  clock.textContent = timeString;
  span.textContent = milliseconds;
}

// Update the dom every millisecond
setInterval(updateTime, 1);

// Initial call displays the time immediately upon loading
updateTime();
