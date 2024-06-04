let numberUser = parseInt(prompt("Escreva um numero inteiro e positivo:"));

for (let contador = 0; contador <= 10; contador++) {
  console.log(`${numberUser} x ${contador} = ${numberUser * contador}`);
}

console.log("<---PRÓXIMOS DOIS NÚMEROS--->");
for (let contador = 0; contador <= 10; contador++) {
  console.log(
    `${numberUser + 1} x ${contador} = ${(numberUser + 1) * contador}`
  );
}
for (let contador = 0; contador <= 10; contador++) {
  console.log(
    `${numberUser + 2} x ${contador} = ${(numberUser + 2) * contador}`
  );
}
