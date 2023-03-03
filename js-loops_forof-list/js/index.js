console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (const pLanguage of programmingLanguages) {
  const li = document.createElement("li");
  ol.append(li);
  li.textContent = pLanguage;
}

// --^-- write/change code here --^--
