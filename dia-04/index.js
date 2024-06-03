let questionUser = prompt("Você esta com fome? (S/N)");
let questionUserMoney = prompt("Você tem dinheiro? (S/N)");
let questionUserRestaurant = prompt("O restaurante está aberto? (S/N)");

if (questionUser === "N" || questionUserMoney === "N") {
  console.log("Hoje o jantar será em casa!");
} else if (
  questionUser === "S" &&
  questionUserMoney === "S" &&
  questionUserRestaurant === "N"
) {
  console.log("Peça um delivery!");
} else if (
  questionUser === "S" &&
  questionUserMoney === "S" &&
  questionUserRestaurant === "S"
) {
  console.log("Hoje o jantar será no seu restaurante preferido!");
}
