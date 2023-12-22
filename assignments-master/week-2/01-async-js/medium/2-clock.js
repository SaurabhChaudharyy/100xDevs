// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function getCurrentTime() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const formattedTime24hr = `${hours}:${minutes}:${seconds}`;

  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedTime12hr = `${(hours % 12 || 12)
    .toString()
    .padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;

  // Use carriage return to overwrite the current line
  //process.stdout.write to write a string to the console.
  //The string contains the formatted time in both 24-hour and 12-hour formats.
  // The carriage return (\r) is used to overwrite the current line in the console,
  //giving the appearance of updating the time in place on the same line.

  process.stdout.write(
    `\r24-Hour Format: ${formattedTime24hr} | 12-Hour Format: ${formattedTime12hr}`
  );
}

// Update the time every second
setInterval(getCurrentTime, 1000);
