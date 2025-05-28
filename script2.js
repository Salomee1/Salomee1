let temperature = 25; 

if (temperature < 0) {
  console.log("Freezing!");
} else if (temperature >= 0 && temperature <= 10) {
  console.log("Very cold");
} else if (temperature >= 11 && temperature <= 20) {
  console.log("Cold");
} else if (temperature >= 21 && temperature <= 30) {
  console.log("Warm");
} else if (temperature > 30) {
  console.log("Hot!");
}
