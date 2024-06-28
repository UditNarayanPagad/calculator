let displayValue = '';
let operator = '';
let firstOperand = null;

let display = document.getElementById('display');

function updateDisplay() {
  display.value = displayValue;
}

function appendNumber(value) {
  displayValue += value;
  updateDisplay();
}
// function appendNumber(number) {
//   displayValue += number;
//   updateDisplay();
// }

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

// function setOperator(op) {
//   if (firstOperand === null) {
//     firstOperand = parseFloat(displayValue);
//     displayValue = '';
//   } else {
//     calculateResult();
//   }
//   operator = op;
// }

// function calculateResult() {
//   if (operator && displayValue !== '') {
//     const secondOperand = parseFloat(displayValue);
//     switch (operator) {
//       case '+':
//         displayValue = (firstOperand + secondOperand).toString();
//         break;
//       case '-':
//         displayValue = (firstOperand - secondOperand).toString();
//         break;
//       case '*':
//         displayValue = (firstOperand * secondOperand).toString();
//         break;
//       case '/':
//         if (secondOperand !== 0) {
//           displayValue = (firstOperand / secondOperand).toString();
//         } else {
//           displayValue = 'Error';
//         }
//         break;
//     }
//     operator = '';
//     firstOperand = parseFloat(displayValue);
//     updateDisplay();
//   }
// }

function calculateResult(){
    displayValue = eval(display.value);
    updateDisplay();
}

function backSpace(){
    displayValue = display.value.slice(0,-1);
    updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  operator = '';
  firstOperand = null;
  updateDisplay();
}

document.addEventListener('DOMContentLoaded', function () {
  updateDisplay();
});