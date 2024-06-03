let questionUser = prompt(
  "Escolha o tipo do combustível que deseja: 1-Gasolina; 2-Álcool; 3-Calibrar os pneus. "
);

let result = "";
switch (questionUser) {
  case "1":
    let quantity = Number(prompt("Qual o valor que deseja abastecer?"));
    result = quantity / 5;
    console.log(`Você abasteceu ${result} litros de gasolina.`);
    break;

  case "2":
    let quantityAlcool = Number(prompt("Qual o valor que deseja abastecer?"));
    result = quantityAlcool / 3;
    console.log(`Você abasteceu ${result} litros de álcool.`);
    break;

  case "3":
    console.log("Pneus calibrados com sucesso!");
    break;

  default:
    console.log("ERRO");
}
