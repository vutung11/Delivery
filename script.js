/*
const arr3 = [10, 14, 4, 1, 9];
const arr4 = [20, -5, 6, 8, "error", 11, -11];
const calcWe = function (arr1, arr2) {
  const temps = arr1.concat(arr2);
  let max = temps[0];
  let min = temps[1];
  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[i];
    if (typeof curTemps !== "number") continue;
    if (curTemps > max) max = curTemps;
    if (curTemps < min) min = curTemps;
  }
  console.log(max, min);
  return max - min;
};
const tetA = calcWe(arr3, arr4);
console.log(tetA);

console.log("===============");

const day1 = [1, 5, 33, 15];
const day2 = [-4, 21, 24, 20];

const printWeather = function (arr1, arr2) {
  const arr = arr1.concat(arr2);
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}^C in ${i + 1} day... `;
  }
  console.log("...", str);
};
printWeather(day1, day2);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  let inputNumber = Number(document.querySelector(".guess").value);
  if (!inputNumber) {
    displayMessage("No Number!");
    document.querySelector(".message").style.color = "yellow";
  } else if (inputNumber === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = inputNumber;
    document.querySelector(".message").style.color = "blue";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (inputNumber !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").style.color = "red";
      inputNumber > secretNumber
        ? displayMessage("Too High")
        : displayMessage("Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost game!");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("?");
  document.querySelector(".guess").value = "";
  document.querySelector(".message").style.color = "#fff";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  console.log(secretNumber);
});

console.log(secretNumber);
