function salaryIncrease(employee, salaryEmployee) {
  let result = 0;
  let increasePercentage = "";

  if (salaryEmployee <= 1500) {
    parseInt((result = salaryEmployee * 1.2));
    increasePercentage = "20%";
  } else if (salaryEmployee >= 1501 && salaryEmployee <= 2000) {
    parseInt((result = salaryEmployee * 1.15));
    increasePercentage = "15%";
  } else if (salaryEmployee >= 2001 && salaryEmployee <= 3000) {
    parseInt((result = salaryEmployee * 1.1));
    increasePercentage = "10%";
  } else if (salaryEmployee >= 3001) {
    parseInt((result = salaryEmployee * 1.05));
    increasePercentage = "5%";
  }

  console.log(
    `Nome do colaborador: ${employee} - Salário R$${salaryEmployee},00 - Porcentagem de aumento: ${increasePercentage} - Salário atual: R$${result},00`
  );

  askUser();
}

function questionUser() {
  let nameUser = prompt("Digite seu nome: ");
  let salary = Number(prompt("Qual é o seu salário?"));

  salaryIncrease(nameUser, salary);
}

function askUser() {
  let question = prompt(
    "Deseja clacular novamente com novas informações? 1-sim / 2-não"
  );

  if (question !== "1") {
    console.log("Encerrando programa!");
  } else {
    questionUser();
  }
}

questionUser();
