let confirmation = true;
let arrayName = [];
let arrayPassword = [];

while (confirmation) {
  let question = prompt(
    "Escolha: 1-Cadastro / 2-Login / 3-Excluir cadastro / 4-Encerrar programa."
  );

  switch (question) {
    case "1":
      register();
      break;

    case "2":
      let nameUser = prompt("Digite seu nome de usuário:");
      let passwordUser = prompt("Digite uma senha: ");

      login(nameUser, passwordUser);
      break;

    case "3":
      let nameUserDelete = prompt("Digite seu nome de usuário:");
      let passwordUserDelete = prompt("Digite uma senha: ");

      deleteUser(nameUserDelete, passwordUserDelete);
      break;

    case "4":
      console.log("Encerrando programa!");
      confirmation = false;
      break;

    default:
      console.log("Opção inválida");
  }
}

function register() {
  let questionName = prompt("Digite seu nome de usuário:");
  let questionPassword = prompt("Digite uma senha: ");

  arrayName.push(questionName);
  arrayPassword.push(questionPassword);
  alert("Cadastro realizado com sucesso!");
}

function login(nameUser, passwordUser) {
  let userIndex = arrayName.indexOf(nameUser);

  if (userIndex !== -1 && arrayPassword[userIndex] === passwordUser) {
    console.log(true);
    alert("Login feito com sucesso!");
  } else {
    console.log(false);
    alert("Nome ou senha incorretos!");
  }
}

function deleteUser(nameUser, passwordUser) {
  let userIndex = arrayName.indexOf(nameUser);

  if (userIndex !== -1 && arrayPassword[userIndex] === passwordUser) {
    arrayName.splice(userIndex, 1);
    arrayPassword.splice(userIndex, 1);
    alert("Usuário excluído com sucesso!");
  } else {
    console.log(false);
    alert("Nome ou senha incorretos!");
  }
}
