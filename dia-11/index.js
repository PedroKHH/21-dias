let arrayNames = [];
let arrayGrade = [];
let confirmationUser = true;

let arrayNamesCounter = 0;
let arrayGradeCounter = 0;

while (confirmationUser) {
  let questionUser = prompt(
    "Escolha uma das opções: 1-Inserir nota. / 2-Parar programa."
  );

  if (questionUser !== "1") {
    alert("Encerrando programa");

    studentsGrade();
    sumAndMedia();

    confirmationUser = false;
    continue;
  } else {
    let nameStudent = prompt("Escreva o nome do aluno: ");
    let gradeStudent = Number(prompt("Escreva a nota do aluno: "));

    arrayNames[arrayNamesCounter] = nameStudent;
    arrayNamesCounter++;

    arrayGrade[arrayGradeCounter] = gradeStudent;
    arrayGradeCounter++;
  }
}

function studentsGrade() {
  for (let i = 0; i < arrayNames.length; i++) {
    console.log(`Estudante: ${arrayNames[i]} - Nota: ${arrayGrade[i]}`);
  }
}

function sumAndMedia() {
  let resultSum = 0;

  for (let i = 0; i < arrayGrade.length; i++) {
    resultSum += arrayGrade[i];
  }

  let media = resultSum / arrayNames.length;

  console.log(`Soma das notas: ${resultSum} - Média das notas: ${media}`);
}
