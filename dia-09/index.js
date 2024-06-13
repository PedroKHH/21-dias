let confirmUser = true;

do {
  // Entrada de dados
  let nameUser = prompt("Escreva seu nome:");
  let ageUser = Number(prompt("Escreva sua idade:"));
  let weightUser = Number(prompt("Escreva seu peso: (KG)"));
  let heightUser = Number(prompt("Escreva sua altura: (M)"));
  let professionUser = prompt("Escreva sua profissão:");

  // Saída de dados
  console.log(
    `Olá ${nameUser}, você tem ${ageUser} anos, é ${professionUser}, tem ${heightUser}M de altura e pesa ${weightUser}KG.`
  );

  // Verificação da idade para consumo de álcool
  if (ageUser < 18) {
    console.log("Sem gelada para você");
  } else {
    console.log("Está liberado para tomar umas geladas.");
  }

  // Cálculo da idade em meses, semanas e dias
  calculateAge(ageUser);

  // Cálculo do IMC
  let calculateIMC = weightUser / (heightUser * heightUser);

  // Classificação do IMC
  if (calculateIMC < 18.5) {
    console.log("Magreza, quando o resultado é menor que 18,5 kg/m2;");
  } else if (calculateIMC >= 18.5 && calculateIMC < 24.9) {
    console.log("Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;");
  } else if (calculateIMC >= 24.9 && calculateIMC <= 30) {
    console.log("Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;");
  } else if (calculateIMC > 30) {
    console.log("Obesidade, quando o resultado é maior que 30 kg/m2.");
  }

  // Cálculo do ano de nascimento
  let yearOfBirthday = 2024 - ageUser;
  console.log(`Você nasceu em ${yearOfBirthday}.`);

  // Loop para listar todos os anos de vida
  for (let i = 0; i <= ageUser; i++) {
    console.log(`Ano: ${yearOfBirthday + i} - Idade: ${i}`);
  }

  // Pergunta ao usuário se deseja inserir novos dados
  let questionUser = prompt("Deseja inserir novos dados? (1-sim/2-não)");

  if (questionUser === "1") {
    confirmUser = true;
  } else if (questionUser === "2") {
    console.log("Encerrando programa!");
    confirmUser = false;
  } else {
    console.log("ERRO");
  }
} while (confirmUser);

// Função para calcular a idade em meses, semanas e dias
function calculateAge(age) {
  let resultInMonths = age * 12;
  let resultInWeeks = age * 52;
  let resultInDays = age * 365;

  console.log(`Idade em meses: ${resultInMonths}
Idade em semanas: ${resultInWeeks}
Idade em dias: ${resultInDays}`);
}
