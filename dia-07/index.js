let confirm = true;
let noteSum = 0;
let quantityOfMen = 0;
let higherNoteMan = -1;
let quantityOfWomen = 0;
let quantityOfWomenMore7 = 0;

while (confirm) {
  questionUser = prompt("Deseja cadastrar um aluno? (S/N)").toUpperCase();

  if (questionUser === "S") {
    note = parseFloat(prompt("Escreva a nota do aluno:"));
    gender = prompt("Escreva o gênero do aluno: (M/F)").toUpperCase();

    noteSum += note;

    if (gender === "M") {
      quantityOfMen++;
      if (note > higherNoteMan) {
        higherNoteMan = note;
      }
    } else if (gender === "F") {
      quantityOfWomen++;
      if (note > 7) {
        quantityOfWomenMore7++;
      }
    }
  } else if (questionUser === "N") {
    confirm = false;
  } else {
    console.log("ERRO");
  }
}

console.log(
  `A média geral dos alunos foi:${
    noteSum / (quantityOfMen + quantityOfWomen)
  } .`
);
console.log(`Quantidade homens que enviaram as notas: ${quantityOfMen}`);
console.log(
  `Quantidade de mulheres que tiveram nota acima de 7: ${quantityOfWomenMore7}`
);
console.log(`Maior nota entre os homens: ${higherNoteMan}`);
