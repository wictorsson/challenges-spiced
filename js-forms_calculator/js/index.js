console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  let operator = data.operator;
  let numbA = Number(data.numberA);
  let numbB = Number(data.numberB);

  if (operator === "addition") result = add(numbA, numbB);
  if (operator === "subtraction") result = subtract(numbA, numbB);
  if (operator === "multiplication") result = multiply(numbA, numbB);
  if (operator === "division") result = divide(numbA, numbB);
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
