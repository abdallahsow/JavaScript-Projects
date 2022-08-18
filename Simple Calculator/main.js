let finalResult = 0;

const resultEl = document.getElementById("result-el");
const addTerm = "Sum: ";
const subTerm = "Diff: ";
const prodTerm = "Prod: ";
const divTerm = "Qt: ";

function Operation(type, Term) {
  let num1 = document.getElementById("num1-el").value;
  let num2 = document.getElementById("num2-el").value;
  let firstTerm = Number(num1);
  let secondTerm = Number(num2);
  if (type === "add") {
    finalResult = firstTerm + secondTerm;
    resultEl.textContent = addTerm + finalResult;
  } else if (type === "substract") {
    finalResult = firstTerm - secondTerm;
    resultEl.textContent = subTerm + finalResult;
  } else if (type === "multiply") {
    finalResult = firstTerm * secondTerm;
    resultEl.textContent = prodTerm + finalResult;
  } else if (type === "divide") {
    finalResult = firstTerm / secondTerm;
    resultEl.textContent = divTerm + finalResult;
  }
}
