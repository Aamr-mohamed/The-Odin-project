function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

let num1 = 0;
let num2 = 0;
function operate(num1, num2, operator) {
  return operator(num1, num2);
}
console.log(operate(3, 2, multiply));
function inputScreen() {
  const inputScreen = document.getElementsByClassName("input");
}
