const firstPass = document.getElementById("first-pass");
const secondPass = document.getElementById("second-pass");
const upperCase = document.getElementById("uppercase-choice");
const lowerCase = document.getElementById("lowercase-choice");
const numbers = document.getElementById("numbers-choice");
const symbols = document.getElementById("symbols-choice");
let passLength = 15;
let pass = [];
let checkBoxes = [
  { type: upperCase, possibilities: 26, startPoint: 65 },
  { type: lowerCase, possibilities: 26, startPoint: 97 },
  { type: numbers, possibilities: 10, startPoint: 48 },
  { type: symbols, possibilities: 15, startPoint: 33 },
  { type: symbols, possibilities: 7, startPoint: 58 },
  { type: symbols, possibilities: 6, startPoint: 91 },
  { type: symbols, possibilities: 4, startPoint: 123 },
];

function cases(availability, charCode) {
  return String.fromCharCode(
    Math.floor(Math.random() * availability) + charCode
  );
}

function controlCheck() {
  for (let select of checkBoxes) {
    const { type, possibilities, startPoint } = select;
    if (type.checked) {
      pass.push(cases(possibilities, startPoint));
    }
  }
}

function generate() {
  for (let i = 0; i < passLength; i++) {
    controlCheck();
  }
}

function printPass() {
  generate();
  let passString1 = "";
  let passString2 = "";
  for (let i = 0; i < passLength; i++) {
    passString1 += pass[Math.floor(Math.random() * pass.length)];
    passString2 += pass[Math.floor(Math.random() * pass.length)];
  }
  firstPass.textContent = passString1;
  secondPass.textContent = passString2;
  pass = [];
}
