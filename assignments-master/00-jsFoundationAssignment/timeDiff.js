//Calculate the time it takes between s setTImeout call and the inner function actually running

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const milliseconds = now.getMilliseconds().toString().padStart(3, "0");

  return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}

const currentTime = getCurrentTime();
console.log(currentTime);

setTimeout(() => {
  const timeDiff = getCurrentTime();
  console.log(timeDiff);
}, 1000);

//Output -->
// 22:37:26:717
// 22:37:27:723
//Difference - 1:006 seconds.
//The difference is supposed to be 1 second according to the time in the setTimeout function, but the time
//difference is more than 1 second, hence the difference is the time taken by setTimeout function to internally call
//the function
