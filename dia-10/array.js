let numbersArray = [];
let confirmation = true;
let positionArray = 0;

while (confirmation) {
  let questionNumber = prompt("Escreva numeros inteiros e positivos:");
  numbersArray[positionArray] = questionNumber;

  let continueUser = prompt("Insira 1 caso deseja continuar.");

  if (continueUser !== "1") {
    confirmation = false;

    console.log(numbersArray);
    continue;
  }

  positionArray++;
}

for (let i = numbersArray.length - 1; i >= 0; i--) {
  console.log(numbersArray[i]);
}
