function login() {
  const name = prompt("Enter your name:");
  const password = prompt("Enter your password:");

  if (name === "admin" && password === "1234") {
    console.log("Hello Admin");
  } else {
    console.log("Hello guest");
  }
}


login();
