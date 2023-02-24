console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
var pizzaSize1;
var pizzaSize2;

pizzaInput1.addEventListener("input", () => {
  // write your code here
  pizzaSize1 = Number(pizzaInput1.value);
  if (pizzaSize2) {
    calculatePizzaGain(pizzaSize1, pizzaSize2);
    updateOutputColor(pizzaSize1, pizzaSize2);
  }
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  pizzaSize2 = Number(pizzaInput2.value);
  if (pizzaSize1) {
    calculatePizzaGain(pizzaSize1, pizzaSize2);
    updateOutputColor(pizzaSize1, pizzaSize2);
  }
  updatePizzaDisplay(pizza2, pizzaSize2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  // write your code here
  let area1 = Math.PI * Math.pow(diameter1 / 2, 2);
  let area2 = Math.PI * Math.pow(diameter2 / 2, 2);

  let gain = ((area2 - area1) / area1) * 100;

  output.textContent = Math.round(gain);
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  // write your code here
  let displaySize = (newSize / 24) * 100;
  let displaySizePx = displaySize + "px";
  pizzaElement.style.width = displaySizePx;
}

// Task 3

function updateOutputColor(size1, size2) {
  if (size2 < size1) {
    console.log("Smaller");
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
  // write your code here
}
