// Create a terminal clock (HH:MM:SS)

function consoleClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  console.clear();
  console.log(`${hours}:${minutes}:${seconds}`);
}

//Updating the clock every millisecond
setInterval(consoleClock, 100);
