let arrayModel = [];
let arrayYear = [];
let arrayValue = [];

let confirmationUser = true;

let arrayModelCounter = 0;
let arrayYearCounter = 0;
let arrayValueCounter = 0;

while (confirmationUser) {
  let questionUser = prompt(
    "Escolha uma das opções: 1-Inserir carro. / 2-Parar programa."
  );

  if (questionUser !== "1") {
    alert("Encerrando programa!");
    showCars();

    confirmationUser = false;
    continue;
  } else {
    let modelCar = prompt("Qual o nome do carro?");
    let yearOfTheCar = Number(prompt("Qual o ano de fabricação do carro?"));
    let valueOfTheCar = Number(prompt("Qual o valor do carro?"));

    arrayModel[arrayModelCounter] = modelCar;
    arrayModelCounter++;

    arrayYear[arrayYearCounter] = yearOfTheCar;
    arrayYearCounter++;

    arrayValue[arrayValueCounter] = valueOfTheCar;
    arrayValueCounter++;
  }
}

function showCars() {
  for (let i = 0; i < arrayModel.length; i++) {
    console.log(
      `Modelo: ${arrayModel[i]} - Ano: ${arrayYear[i]} - Valor: ${arrayValue[i]}`
    );
  }
}

function orderByValue() {
  for (let i = 0; i < arrayValue.length - 1; i++) {
    for (let j = 0; j < arrayValue.length - i - 1; j++) {
      if (arrayValue[j] > arrayValue[j + 1]) {
        let modelHighestValue = arrayModel[j];
        arrayModel[j] = arrayModel[j + 1];
        arrayModel[j + 1] = modelHighestValue;

        let yearHighestValue = arrayYear[j];
        arrayYear[j] - arrayYear[j + 1];
        array[j + 1] = yearHighestValue;

        let highestValue = arrayValue[j];
        arrayValue[j] = arrayValue[j + 1];
        arrayValue[j + 1] = highestValue;
      }
    }
  }

  console.log("Carros ordenados por preço:");
  for (let i = 0; i < arrayModel.length; i++) {
    console.log(`${arrayModel[i]} - ${arrayYear[i]} - ${arrayValue[i]}`);
  }
}
