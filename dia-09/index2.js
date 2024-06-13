let annualIncreasePercentage = 1.5;
const startingYear = 2024;
let confirmUser = true;

do {
  let nameUser = prompt("Escreva seu nome:");
  let ageUser = Number(prompt("Escreva sua idade:"));
  let salary = Number(prompt("Escreva seu salário atual: "));
  alert(
    `Nome: ${nameUser}, idade: ${ageUser}, salário: ${salary.toFixed(2)} .`
  );

  let confirmInformation = prompt(
    "Você confirma estas informações? (1-sim/2-não)"
  );

  if (confirmInformation === "1") {
    confirmUser = false;

    for (let i = 0; i < 10; i++) {
      let yearSalary = salary + salary * (annualIncreasePercentage / 100);
      console.log(`${startingYear + i} - R$${yearSalary.toFixed(2)}`);

      salary = yearSalary;
      annualIncreasePercentage *= 2;
    }
  } else if (confirmInformation === "2") {
    confirmUser = true;
  } else {
    console.log("ERRO");
  }
} while (confirmUser);
