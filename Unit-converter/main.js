/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const dBtn = document.getElementById("d-btn");
const btn = document.getElementById("btn");
const Length = document.getElementById("length");
const Volume = document.getElementById("volume");
const Mass = document.getElementById("mass");
const dLength = document.getElementById("d-length");
const dVolume = document.getElementById("d-volume");
const dMass = document.getElementById("d-mass");
const inputEl = document.getElementById("input-field");
const dInputEl = document.getElementById("d-input-field");
const meterFeetRate = 3.281;
const literGallonRate = 0.264;
const kiloPoundRate = 2.204;
let unit1 = "";
let unit2 = "";

btn.addEventListener("click", function () {
  const val = Number(inputEl.value);
  if (!val) {
    alert("Please enter a number");
  } else {
    convert(inputEl, Length, meterFeetRate, "meters", "feet");
    convert(inputEl, Volume, literGallonRate, "liters", "gallons");
    convert(inputEl, Mass, kiloPoundRate, "kilos", "pounds");
  }
});

dBtn.addEventListener("click", function () {
  const ent = Number(dInputEl.value);
  if (!ent) {
    alert("Please enter a number");
  } else {
    convert(dInputEl, dLength, meterFeetRate, "meters", "feet");
    convert(dInputEl, dVolume, literGallonRate, "liters", "gallons");
    convert(dInputEl, dMass, kiloPoundRate, "kilos", "pounds");
  }
});

function convert(field, measure, convRate, unit1, unit2) {
  let num = field.value;
  const conversion1 = num * convRate;
  const conversion2 = num / convRate;
  const conv1 = conversion1.toFixed(3);
  const conv2 = conversion2.toFixed(3);
  measure.innerHTML = `${num} ${unit1} = ${conv1} ${unit2} | ${num} ${unit2} = ${conv2} ${unit1}`;
}