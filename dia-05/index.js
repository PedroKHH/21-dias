let number1 = Number(prompt("Escreva um número:"));
let number2 = Number(prompt("Escreva outro número:"));

let chosenMath = prompt(
  "Qual operação matemática deseja fazer? 1-Soma / 2-Subtração / 3-Multiplicação / 4-Divisão"
);
let result = "";

switch (chosenMath) {
  case "1":
    result = number1 + number2;
    console.log(result);
    break;
  case "2":
    result = number1 - number2;
    console.log(result);
    break;
  case "3":
    result = number1 * number2;
    console.log(result);
    break;
  case "4":
    result = number1 / number2;
    console.log(result);
    break;

  default:
    console.log("ERRO!");
}
