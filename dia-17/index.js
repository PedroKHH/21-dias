let confirmation = true;

class Hotel {
  Id;
  Name;
  Category;
  Address;
  Phone;

  constructor(id, name, category, address, phone) {
    this.Id = id;
    this.Name = name;
    this.Category = category;
    this.Address = address;
    this.Phone = phone;
  }
}

class Reservation {
  Id;
  IdOfHotel;
  ReservationName;
  DayIn;
  DayOut;

  constructor(id, idOfHotel, reservationName, dayIn, dayOut) {
    this.Id = id;
    this.IdOfHotel = idOfHotel;
    this.ReservationName = reservationName;
    this.DayIn = dayIn;
    this.Dayout = dayOut;
  }
}

let arrayHotel = [];
let arrayReservation = [];

function registerHotel() {
  let idHotelUser = prompt("Digite o ID do hotel:");
  let nameOfHotel = prompt("Digite o nome do hotel:");
  let categoryHotel = prompt("Digite a categoria do hotel:");
  let addressHotel = prompt("Digite o endereço do hotel:");
  let phoneNumberHotel = prompt("Digite o número de telefone do hotel:");

  let idExists = arrayHotel.some((hotel) => hotel.Id === idHotelUser);

  if (idExists) {
    console.log(`Hotel com o ID ${idHotelUser} já existente.`);
  } else {
    let objectHotel = new Hotel(
      idHotelUser,
      nameOfHotel,
      categoryHotel,
      addressHotel,
      phoneNumberHotel
    );

    arrayHotel.push(objectHotel);
    console.log(`Hotel ${nameOfHotel} cadastrado com sucesso!`);
  }
}

function registerReservation() {
  let reservationId = prompt("Digite o ID da reserva:");
  let idReservationHotel = prompt("Digite a ID do hotel:");
  let reservationName = prompt("Digite o nome do responsável pela reserva: ");
  let dayInHotel = prompt("Digite o dia de entrada no hotel: ");
  let dayOutHotel = prompt("Digite o dia de saída no hotel: ");

  let idExists = arrayHotel.some((hotel) => hotel.Id === idReservationHotel);

  if (idExists) {
    let objectReservation = new Reservation(
      reservationId,
      idReservationHotel,
      reservationName,
      dayInHotel,
      dayOutHotel
    );

    arrayReservation.push(objectReservation);
    console.log("Reserva cadastrada com sucesso!");
  } else {
    console.log(`Hotel com o ID ${idReservationHotel} não encontrado.`);
  }
}

function reservationsInHotel(idOfHotel) {
  arrayReservation.forEach((reservation) => {
    if (reservation.IdOfHotel === idOfHotel) {
      let hotel = arrayHotel.find(
        (hotel) => hotel.Id === reservation.IdOfHotel
      );

      if (hotel) {
        console.log(
          `Nome do hotel: ${hotel.Name} - Nome do responsável pela reserva: ${reservation.ReservationName} - Dia de entrada: ${reservation.DayIn} - Dia de saída: ${reservation.DayOut}`
        );
      }
    }
  });
}

function reservationSearch(IdOfTheReservation) {
  arrayReservation.forEach((reservation) => {
    if (reservation.Id === IdOfTheReservation) {
      let hotel = arrayHotel.find(
        (hotel) => hotel.Id === reservation.IdOfHotel
      );

      if (hotel) {
        console.log(
          `Nome do hotel: ${hotel.Name} - Endereço: ${hotel.Address} - Dia de entrada: ${reservation.DayIn} - Dia de saída: ${reservation.DayOut}`
        );
      } else {
        console.log(`Hotel com Id ${reservation.IdOfHotel} não encontrado.`);
      }
    }
  });
}

function reservationsName(nameOfTheReservation) {
  let matchingReservations = arrayReservation.filter(
    (reservation) => reservation.ReservationName === nameOfTheReservation
  );

  if (matchingReservations.length > 0) {
    matchingReservations.forEach((reservation) => {
      console.log(
        `Nome do responsável pela reserva: ${reservation.ReservationName} - ID da reserva: ${reservation.Id} - Dia de entrada: ${reservation.DayIn} - Dia de saída: ${reservation.DayOut}`
      );
    });
  } else {
    console.log("Nenhuma reserva encontrada para o nome fornecido.");
  }
}

function categoryHotel(category) {
  let categoryOfHotels = arrayHotel.filter(
    (hotel) => hotel.Category === category
  );

  if (categoryOfHotels.length > 0) {
    categoryOfHotels.forEach((hotel) => {
      console.log(
        `ID do hotel: ${hotel.Id} - Nome: ${hotel.Name} - Endereço: ${hotel.Address} - Telefone: ${hotel.Phone}`
      );
    });
  } else {
    console.log("Nenhum hotel nesta categoria.");
  }
}

function newPhone(idHotel, phoneNumber) {
  let hotel = arrayHotel.find((hotel) => hotel.Id === idHotel);

  if (hotel) {
    hotel.Phone = phoneNumber;
    console.log(
      `Número de telefone do hotel ${hotel.Name} atualizado com sucesso!`
    );
  } else {
    console.log("Hotel não encontrado.");
  }
}

while (confirmation) {
  let questionUser = prompt(
    `Escolha uma das opções: 
    1-Cadastrar um hotel / 
    2-Fazer uma reserva / 
    3-Mostrar todas as reservas em um hotel / 
    4-Informações sobre uma reserva / 
    5-Procurar reservas através do nome / 
    6-Hotéis baseado em categorias / 
    7-Atualizar número de telefone de hotel /
    8-Encerrar programa.`
  );

  switch (questionUser) {
    case "1":
      registerHotel();
      break;
    case "2":
      registerReservation();
      break;
    case "3":
      let questionId = prompt(
        "Digite o ID do hotel que deseja ver as reservas: "
      );
      reservationsInHotel(questionId);
      break;
    case "4":
      let questionIdReservation = prompt(
        "Digite o ID da reserva em que deseja ver as informações."
      );
      reservationSearch(questionIdReservation);
      break;
    case "5":
      let searchName = prompt("Digite o nome do responsável pela reserva.");
      reservationsName(searchName);
      break;
    case "6":
      let categoryHotelUser = prompt(
        "Digite a categoria de hotéis que deseja ver."
      );
      categoryHotel(categoryHotelUser);
      break;
    case "7":
      let idOfHotelUser = prompt(
        "Digite o ID do hotel em que deseja atualizar o telefone."
      );
      let newPhoneUser = prompt("Digite o novo telefone do hotel.");
      newPhone(idOfHotelUser, newPhoneUser);
      break;
    case "8":
      console.log("Encerrando programa");
      confirmation = false;
      break;
    default:
      console.log("Opção inválida.");
  }
}
