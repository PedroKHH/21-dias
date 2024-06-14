let numberUser = parseInt(prompt("Escreva um número inteiro e positivo: "));
let fibonacci = [];

fibonacci[0] = numberUser - 1;
fibonacci[1] = 1;

for (let i = 0; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Fibonacci: " + fibonacci);
