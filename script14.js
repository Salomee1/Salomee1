function getFeedback(score, name) {
  const threshold = 51;

  if (score < threshold) {
    const missingPoints = threshold - score;
    console.log(`Unfortunately ${name}, you did not pass the minimum threshold, you missed ${missingPoints} points. Prepare better.`);
  } else if (score <= 90) {
    const extraPoints = score - threshold;
    console.log(`Congratulations ${name}, you got ${extraPoints} points more than the threshold.`);
  } else {
    console.log(`Excellent work ${name}, you achieved a very good result!`);
  }
}


getFeedback(30, "Salome");
getFeedback(70, "Salome");
getFeedback(95, "Salome");
