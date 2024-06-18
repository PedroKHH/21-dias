let arrayNames = [];
let arrayPasswords = [];
let arrayCounter = 0;
let confirmation = true;

while (confirmation) {
  let questionUser = prompt(
    "Escolha uma das opções: 1-Cadastrar / 2-Login / 3-Excluir cadastro / 4-Encerrar programa."
  );

  switch (questionUser) {
    case "1":
      let nameUser = prompt("Digite o nome de usuário:");
      let password = prompt("Digite a senha:");

      arrayNames[arrayCounter] = nameUser;
      arrayPasswords[arrayCounter] = password;

      arrayCounter++;
      break;

    case "2":
      let nameUser2 = prompt("Digite o nome do usuário:");
      let password2 = prompt("Digite a senha:");

      searchNameUser(nameUser2, password2);
      break;

    case "3":
      let nameUser3 = prompt("Digite o nome do usuário a ser excluído:");
      let password3 = prompt("Digite a senha:");

      deleteUser(nameUser3, password3);
      break;

    case "4":
      confirmation = false;
      break;

    default:
      console.log("Opção inválida.");
  }
}

function searchNameUser(name, password) {
  let indiceElement = -1;

  for (let i = 0; i < arrayNames.length; i++) {
    if (arrayNames[i] === name && arrayPasswords[i] === password) {
      indiceElement = i;
      break;
    }
  }

  if (indiceElement !== -1) {
    console.log("Sucesso!");
  } else {
    console.log("Usuário não encontrado.");
  }
}

function deleteUser(name, password) {
  let indiceElement = -1;

  for (let i = 0; i < arrayNames.length; i++) {
    if (arrayNames[i] === name && arrayPasswords[i] === password) {
      indiceElement = i;
      break;
    }
  }

  if (indiceElement !== -1) {
    for (let i = indiceElement; i < arrayCounter - 1; i++) {
      arrayNames[i] = arrayNames[i + 1];
      arrayPasswords[i] = arrayPasswords[i + 1];
    }

    arrayCounter--;
    arrayNames.length = arrayCounter;
    arrayPasswords.length = arrayCounter;

    console.log("Usuário excluído com sucesso.");
  } else {
    console.log("Usuário não encontrado.");
  }
}
