let name = prompt("Qual é o seu nome?");
let age = parseFloat(prompt("Qual é a sua idade?"));
let height = parseFloat(prompt("Qual é a sua altura?"));
let weight = parseFloat(prompt("Qual é o seu peso?"));

let yearOfbirth = 2024 - age;

let IMC = weight / (height * height);

console.log(`Olá ${name}, você tem ${age} anos, nasceu em ${yearOfbirth}, tem ${height} de altura, 
pesa ${weight}kg, seu IMC é ${IMC} KG/M2.`);
