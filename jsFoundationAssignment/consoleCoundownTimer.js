// Create a counter in javaScript ( counts from 30 to 0)

let seconds = 30;
function timer() {
  let countDown = setInterval(() => {
    if (seconds >= 0) {
      console.clear();
      console.log(seconds);
      seconds--;
    } else {
      clearInterval(countDown);
      console.log("Countdown Complete!!!");
    }
  }, 1000);
}

timer();
