console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const success = document.querySelector('[data-js="success"]');

tosError.setAttribute("hidden", "");
success.setAttribute("hidden", "");

function hideTosError() {
  tosError.setAttribute("hidden", "");
  success.removeAttribute("hidden");
}

function showTosError() {
  tosError.removeAttribute("hidden");
  success.setAttribute("hidden", "");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  if (!data.tos) {
    showTosError();
    return;
  }
  hideTosError();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
