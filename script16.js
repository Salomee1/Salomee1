function convertTo24Hour() {
  const time = prompt("Enter the time (e.g., 10:00):");
  const period = prompt("Enter AM or PM:").toUpperCase();

  let [hours, minutes] = time.split(":").map(Number);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }

  
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  console.log(`Converted time: ${formattedTime}`);
}


convertTo24Hour();
