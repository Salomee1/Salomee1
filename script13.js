let choice = Number(prompt('Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math'));
let question;
let answer;

switch (choice) {
  case 1:
    question = "What is typeof(5)?";
    answer = prompt(question);
    if (
      answer.toLowerCase() === "number"
    ) {
      alert("Correct!");
    } else {
      alert("Unfortunately, we can't guess.");
    }
    break;

  case 2:
    question = "Can let be redeclared?";
    answer = prompt(question);
    if (
      answer.toLowerCase() === "yes"
    ) {
      alert("Correct!");
    } else {
      alert("Unfortunately, we can't guess.");
    }
    break;

  case 3:
    question = "What does console.log(Math.floor(2.1)) return?";
    answer = prompt(question);
    if (
      answer.toLowerCase() === "ori"
    ) {
      alert("Correct!");
    } else {
      alert("Unfortunately, we can't guess.");
    }
    break;

  default:
    alert("Invalid topic selected.");
}
