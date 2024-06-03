let name = prompt("Qual o seu nome?");
let age = prompt("Qual a sua idade?");
let driversLicence = prompt("Possui carteira de motorista? (S/N)");
let car = prompt("Você tem carro? (S/N)");

if (age < 18 || driversLicence === "N") {
  console.log(`${name} você não pode dirigir!`);
} else if (age >= 18 && driversLicence === "S" && car === "N") {
  console.log(`${name}, você pode dirigir mas não tem um carro!`);
} else if (age >= 18 && driversLicence === "S" && car === "S") {
  console.log(`${name}, você será o motorista!.`);
}
