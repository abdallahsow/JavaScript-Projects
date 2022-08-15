firstPass = document.getElementById("first-pass");
secondPass = document.getElementById("second-pass");

let length = 15

function generatePass(passLength) {
  firstPass.textContent = "";
  secondPass.textContent = "";
  for (let i = 0; i < passLength; i++) {
    let randomOnePass = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
    firstPass.textContent += randomOnePass;
    let randomTwoPass = String.fromCharCode(Math.floor(Math.random() * 94) + 33);
    secondPass.textContent += randomTwoPass;
  }
}
