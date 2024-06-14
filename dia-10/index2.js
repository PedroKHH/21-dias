let numbersArray = [];
let confirmation = true;
let positionArray = 0;

while (confirmation) {
  let questionNumber = prompt("Escreva cinco números inteiros e positivos:");
  numbersArray[positionArray] = questionNumber;

  if (numbersArray.length === 5) {
    confirmation = false;

    console.log(numbersArray);
    continue;
  }

  positionArray++;
}

for (let i = 4; i >= 0; i--) {
  console.log(numbersArray[i]);
}
