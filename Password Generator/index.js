const upperCase = document.getElementById("uppercase-choice");
const lowerCase = document.getElementById("lowercase-choice");
const numbers = document.getElementById("numbers-choice");
const symbols = document.getElementById("symbols-choice");
let passLength = 15;
let charOfArray = [];
let checkBoxes = [
  { type: upperCase, possibilities: 26, startPoint: 65 },
  { type: lowerCase, possibilities: 26, startPoint: 97 },
  { type: numbers, possibilities: 10, startPoint: 48 },
  { type: symbols, possibilities: 15, startPoint: 33 },
  { type: symbols, possibilities: 7, startPoint: 58 },
  { type: symbols, possibilities: 6, startPoint: 91 },
  { type: symbols, possibilities: 4, startPoint: 123 },
];

function charRendering(availability, charCode) {
  return String.fromCharCode(
    Math.floor(Math.random() * availability) + charCode
  );
}

function outcome() {
  for (let select of checkBoxes) {
    const { type, possibilities, startPoint } = select;
    if (type.checked) {
      charOfArray.push(charRendering(possibilities, startPoint));
    }
  }
}

function generate() {
  for (let i = 0; i < passLength; i++) {
    outcome();
  }
}

const sortingOfPass = () => Math.floor(Math.random() * charOfArray.length);

function printPass() {
  const requiredPassword = 2;
  generate();
   if (charOfArray.length) {
    let passString = "";
    for (let n = 0; n < requiredPassword; n++) {
      for (let i = 0; i < passLength; i++) {
        passString += charOfArray[sortingOfPass()];
      }
      document.querySelector(`#password-${n + 1}`).textContent = passString;
      passString = "";
    }
    charOfArray = [];
   } else {
    alert("Please select at least one checkbox");
  }
}
