const result = document.querySelector("#result");
const userInput = document.querySelector("#user-input");
const operatorButton = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const decimalButton = document.querySelector("[data-decimal]");
const numberButton = document.querySelectorAll("[data-number]");

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

decimalButton.addEventListener("click", appendDecimal);

numberButton.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

function appendNumber(number) {
    if (userInput.textContent === "0" || shouldResetScreen) resetScreen();
    userInput.textContent += number;
  }

  function resetScreen() {
    userInput.textContent = "";
    shouldResetScreen = false;
  }
  
  function appendDecimal() {
    if (shouldResetScreen) resetScreen();
    if (userInput.textContent === "") userInput.textContent = "0";
    if (userInput.textContent.includes(".")) return;
    userInput.textContent += ".";
  }

  function operate(){
      
  };