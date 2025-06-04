let age = Number(prompt("Enter your age:"));
let movieType = prompt("Enter movie type (regular or 3D):").toLowerCase();
let timeOfDay = prompt("Enter time of day (matinee or evening):").toLowerCase();
let hasDiscount = prompt("Do you have a discount ticket? (yes or no):").toLowerCase();

let basePrice;


switch (true) {
  case (age < 10):
    basePrice = 5;
    break;
  case (age >= 10 && age <= 65):
    basePrice = 15;
    break;
  case (age > 65):
    basePrice = 10;
    break;
  default:
    basePrice = 15; 
}


switch (movieType) {
  case "3d":
    basePrice += 5;
    break;
  case "regular":
    break;
  default:
    alert("Invalid movie type entered.");
}

switch (timeOfDay) {
  case "evening":
    basePrice += 5;
    break;
  case "matinee":
    break;
  default:
    alert("Invalid time of day entered.");
}


if (hasDiscount === "yes") {
  let discount = basePrice * 0.25;
  basePrice -= discount > 5 ? 5 : discount; 
}

alert("The ticket price for you is: " + basePrice + " GEL.");
