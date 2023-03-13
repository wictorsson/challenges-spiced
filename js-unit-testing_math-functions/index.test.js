import { add, divide, multiply, subtract } from "./index.js";

test("Add returns two numbers added together", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("Subtract two numbers", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("Multiply two numbers", () => {
  const result = multiply(-2, -4);
  expect(result).toBeGreaterThan(0);
});

test("Divide two numbers", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
