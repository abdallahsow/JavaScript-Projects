const firstPass = document.getElementById("first-pass");
const secondPass = document.getElementById("second-pass");
const upperCase = document.getElementById("uppercase-choice");
const lowerCase = document.getElementById("lowercase-choice");
const numbers = document.getElementById("numbers-choice");
const symbols = document.getElementById("symbols-choice");
let passLength = 15;
let contain = "";
let firstThree = "";
let secondThree = "";
let beforeLastThree = "";
let lastThree = "";
let pair1 = "";
let pair2 = "";
let pair3 = "";
let pair4 = "";
let pair5 = "";
let pair6 = "";

function cases(availability, charCode) {
  return String.fromCharCode(
    Math.floor(Math.random() * availability) + charCode
  );
}

function generatePasswords() {
  firstPass.textContent = "";
  secondPass.textContent = "";
  for (let i = 0; i < passLength; i++) {
    if (
      upperCase.checked &&
      lowerCase.checked &&
      numbers.checked &&
      symbols.checked
    ) {
      firstPass.textContent += cases(94, 33);
      secondPass.textContent += cases(94, 33);
    } else if (upperCase.checked && lowerCase.checked && numbers.checked) {
      firstThree += cases(26, 65).concat(cases(26, 97)).concat(cases(10, 48));
      firstPass.textContent += firstThree.charAt(
        Math.floor(Math.random() * firstThree.length)
      );
      secondPass.textContent += firstThree.charAt(
        Math.floor(Math.random() * firstThree.length)
      );
    } else if (upperCase.checked && numbers.checked && symbols.checked) {
      secondThree += cases(26, 65)
        .concat(cases(10, 48))
        .concat(cases(15, 33))
        .concat(cases(7, 58))
        .concat(cases(6, 91))
        .concat(cases(4, 123));
      firstPass.textContent += secondThree.charAt(
        Math.floor(Math.random() * secondThree.length)
      );
      secondPass.textContent += secondThree.charAt(
        Math.floor(Math.random() * secondThree.length)
      );
    } else if (lowerCase.checked && numbers.checked && symbols.checked) {
      beforeLastThree += cases(26, 97)
        .concat(cases(10, 48))
        .concat(cases(15, 33))
        .concat(cases(7, 58))
        .concat(cases(6, 91))
        .concat(cases(4, 123));
      firstPass.textContent += beforeLastThree.charAt(
        Math.floor(Math.random() * beforeLastThree.length)
      );
      secondPass.textContent += beforeLastThree.charAt(
        Math.floor(Math.random() * beforeLastThree.length)
      );
    } else if (upperCase.checked && lowerCase.checked && symbols.checked) {
      lastThree += cases(26, 65)
        .concat(cases(26, 97))
        .concat(cases(15, 33))
        .concat(cases(7, 58))
        .concat(cases(6, 91))
        .concat(cases(4, 123));
      firstPass.textContent += lastThree.charAt(
        Math.floor(Math.random() * lastThree.length)
      );
      secondPass.textContent += lastThree.charAt(
        Math.floor(Math.random() * lastThree.length)
      );
    } else if (upperCase.checked && lowerCase.checked) {
      pair1 += cases(26, 65).concat(cases(26, 97));
      firstPass.textContent += pair1.charAt(
        Math.floor(Math.random() * pair1.length)
      );
      secondPass.textContent += pair1.charAt(
        Math.floor(Math.random() * pair1.length)
      );
    } else if (upperCase.checked && numbers.checked) {
      pair2 += cases(26, 65).concat(cases(10, 48));
      firstPass.textContent += pair2.charAt(
        Math.floor(Math.random() * pair2.length)
      );
      secondPass.textContent += pair2.charAt(
        Math.floor(Math.random() * pair2.length)
      );
    } else if (upperCase.checked && symbols.checked) {
      pair3 += cases(26, 65)
        .concat(cases(15, 33))
        .concat(cases(7, 58))
        .concat(cases(6, 91))
        .concat(cases(4, 123));
      firstPass.textContent += pair3.charAt(
        Math.floor(Math.random() * pair3.length)
      );
      secondPass.textContent += pair3.charAt(
        Math.floor(Math.random() * pair3.length)
      );
    } else if (lowerCase.checked && numbers.checked) {
      pair4 += cases(26, 97).concat(cases(10, 48));
      firstPass.textContent += pair4.charAt(
        Math.floor(Math.random() * pair4.length)
      );
      secondPass.textContent += pair4.charAt(
        Math.floor(Math.random() * pair4.length)
      );
    } else if (lowerCase.checked && symbols.checked) {
      pair5 += cases(26, 97)
        .concat(cases(15, 33))
        .concat(cases(7, 58))
        .concat(cases(6, 91))
        .concat(cases(4, 123));
      firstPass.textContent += pair5.charAt(
        Math.floor(Math.random() * pair5.length)
      );
      secondPass.textContent += pair5.charAt(
        Math.floor(Math.random() * pair5.length)
      );
    } else if (numbers.checked && symbols.checked) {
      pair6 += cases(10, 48)
        .concat(cases(15, 33))
        .concat(cases(7, 58))
        .concat(cases(6, 91))
        .concat(cases(4, 123));
      firstPass.textContent += pair6.charAt(
        Math.floor(Math.random() * pair6.length)
      );
      secondPass.textContent += pair6.charAt(
        Math.floor(Math.random() * pair6.length)
      );
    } else if (upperCase.checked) {
      firstPass.textContent += cases(26, 65);
      secondPass.textContent += cases(26, 65);
    } else if (lowerCase.checked) {
      firstPass.textContent += cases(26, 97);
      secondPass.textContent += cases(26, 97);
    } else if (numbers.checked) {
      firstPass.textContent += cases(10, 48);
      secondPass.textContent += cases(10, 48);
    } else if (symbols.checked) {
      contain = cases(15, 33)
        .concat(cases(7, 58))
        .concat(cases(6, 91))
        .concat(cases(4, 123))
        .concat(cases(15, 33));
      firstPass.textContent += contain.charAt(
        Math.floor(Math.random() * contain.length)
      );
      secondPass.textContent += contain.charAt(
        Math.floor(Math.random() * contain.length)
      );
    }
  }
}
