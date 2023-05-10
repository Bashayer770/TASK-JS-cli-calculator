const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, I'm ${name}.`);

function calcul(result) {
  var _firstNumber_ = prompt("Please enter the first number:");
  var _secondNumber = prompt("Please enter the second number:");
  var operation = prompt("Please choose the operation:");

  if (operation == "+") {
    result = Number(_firstNumber_) + Number(_secondNumber);
  } else if (operation == "/") {
    result = Number(_firstNumber_) / Number(_secondNumber);
  } else if (operation == "*") {
    result = Number(_firstNumber_) * Number(_secondNumber);
  } else if (operation == "-") {
    result = Number(_firstNumber_) - Number(_secondNumber);
  } else if (operation != null) {
    result = "Error";
  } else if (_firstNumber_ != null) {
    result = "Error";
  } else if (_secondNumber != null) {
    result = "Error";
  }

  console.log(result);
  return result;
}

calcul();
