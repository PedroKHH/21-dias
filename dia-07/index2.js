let confirm = "";

let higherValueInserted = -1;
let quantityOfValueInserted = 0;
let sumOfAllValuesInserted = 0;

let nameUser = prompt("Digite seu nome: ");
let IDUser = prompt("Digite seu CPF: (APENAS NÚMEROS)");
let balance = 10;

do {
  let value = parseFloat(prompt("Digite um valor: "));

  let option = prompt(
    "Escolha uma opção: 1-Saque / 2-Depósito (Digite apenas o número)"
  );

  if (value > higherValueInserted) {
    higherValueInserted = value;
  }

  if (value >= 1) {
    quantityOfValueInserted++;
    sumOfAllValuesInserted += value;
  }

  if (option === "1" && value <= balance && value > 0) {
    balance -= value;
    console.log(
      `Saque de R$${value},00 efetuado, valor de saldo disponível: R$${balance},00.`
    );
  } else if (option === "2" && value > 0) {
    balance += value;
    console.log(
      `Depósito de R$${value},00 efetuado, valor de saldo disponível: R$${balance},00.`
    );
  } else {
    console.log("ERRO");
  }

  let confirmationUser = prompt("Deseja continuar? 1-Sim / 2-Não");

  if (confirmationUser == "1") {
    confirm = true;
  } else if (confirmationUser == "2") {
    confirm = false;
  }
} while (confirm);

console.log(`Saldo total: R$${balance},00`);
console.log(`Maior valor inserido: R$${higherValueInserted},00`);
console.log(
  `Média de valores inseridos: R$${
    sumOfAllValuesInserted / quantityOfValueInserted
  },00`
);
