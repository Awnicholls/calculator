const result = document.querySelector("#result");
const userInput = document.querySelector("#user-input");
const operatorButton = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const decimalButton = document.querySelector("[data-decimal]");
const numberButton = document.querySelectorAll("[data-number]");

const calculator = {
  userInput: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};
function updateDisplay(){
userInput.textContent = calculator.userInput;
};
updateDisplay();
// let firstOperand = "";
// let secondOperand = "";
// let operator = null;
// let waitingForSecondOperand = false;

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
// window.addEventListener("keydown", setInput);
equalsButton.addEventListener("click", handleOperator);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
decimalButton.addEventListener("click", appendDecimal);
operatorButton.forEach((button) =>
  button.addEventListener("click", () => handleOperator(button.textContent))
);
function resetScreen() {
  userInput.textContent = "";
  result.textContent = "";
}

function deleteNumber() {
  userInput.textContent = userInput.textContent.toString().slice(0, -1);
  calculator.userInput = calculator.userInput.toString().slice(0, -1); 
  console.log(calculator);}
 


function updateResult() {
  result.textContent = calculator.firstOperand;
}
function clear() {
  userInput.textContent = "";
  result.textContent = "";
  calculator.userInput = "";
  calculator.firstOperand = null;
  calculator.secondOperand = null;
  calculator.operator = null;
  calculator.waitingForSecondOperand = false;
  console.log(calculator);
}

numberButton.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

// function appendNumber(number) {
// if (userInput.textContent === "0") resetScreen();
// calculator.userInput = userInput === '0' ? number : userInput.textContent += number;
// };

function appendNumber(number) {
  const { waitingForSecondOperand } = calculator;

  if (waitingForSecondOperand === true) {
    resetScreen();
    calculator.userInput =  userInput.textContent += number;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.userInput = calculator.userInput === '0' ? number : calculator.userInput += number;
  }
  updateDisplay();
  console.log(calculator);
};


  function resetScreen() {
    userInput.textContent = "";
  }
  
function appendDecimal() {
  // if (calculator.waitingForSecondOperand === true) {
  // 	calculator.userInput = '0.'
  //   calculator.waitingForSecondOperand = false;
  //   return
  // }
    if (calculator.userInput === "" || calculator.waitingForSecondOperand === true){
   	calculator.userInput = '0.'
     calculator.waitingForSecondOperand = false;
      calculator.userInput = "0";}
    if (calculator.userInput.includes(".")) return;
    calculator.userInput += ".";
    console.log(calculator);
    updateDisplay();
  }



function handleOperator(nextOperator) {
    // Destructure the properties on the calculator object
    const { firstOperand, userInput, operator } = calculator
    // `parseFloat` converts the string contents of `displayValue`
    // to a floating-point number
    const inputValue = parseFloat(userInput);
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      console.log(calculator);
      return;
    }
    // verify that `firstOperand` is null and that the `inputValue`
    // is not a `NaN` value
    if (firstOperand === null && !isNaN(inputValue)) {
      // Update the firstOperand property
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      calculator.userInput = `${parseFloat(result.toFixed(7))}`;
      calculator.firstOperand = result;
      updateResult();
    }
    console.log(calculator);

  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }



  function calculate(firstOperand, secondOperand, operator) {
    a = Number(firstOperand);
    b = Number(secondOperand);
    switch (operator) {
      case "+":
        return add(a, b);
      case "−":
        return substract(a, b);
      case "×":
        return multiply(a, b);
      case "÷":
        if (b === 0) return null;
        else return divide(a, b);
      default:
        return secondOperand;
    }
  }