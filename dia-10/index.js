let numbersArray = [];
let confirmation = true;
let positionArray = 0;

while (confirmation) {
  let questionNumber = prompt("Escreva um número inteiro e positivo:");
  numbersArray[positionArray] = questionNumber;

  let continueUser = prompt("Insira 1 caso deseja continuar.");

  if (continueUser !== "1") {
    confirmation = false;

    continue;
  }

  positionArray++;
}

for (let i = 0; i < numbersArray.length; i++) {
  console.log(numbersArray[i] + " - " + " posição: " + i);
}
