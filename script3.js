let number = prompt("Enter a number:");

number = Number(number);

if (isNaN(number)) {
  alert("That's not a valid number.");
} else {
  if (number % 2 === 0) {
    alert("Number is even");
  } else {
    alert("Number is odd");
  }
}
