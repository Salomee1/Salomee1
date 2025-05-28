let age = 20; 

if (typeof age !== 'number' || isNaN(age)) {
  console.log("The specified age is invalid!");
} else if (age < 18) {
  console.log("You cannot get a driver's license");
} else {
  console.log("You can get a driver's license");
}
