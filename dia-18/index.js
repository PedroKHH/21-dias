class Book {
  Title;
  Author;
  PublishingCompany;
  YearOfPublishing;
  Availability = true;

  constructor(title, author, publishingCompany, yearOfPublishing) {
    this.Title = title;
    this.Author = author;
    this.PublishingCompany = publishingCompany;
    this.YearOfPublishing = yearOfPublishing;
  }
}

class Library {
  NameLibrary;
  Address;
  PhoneNumber;
  BookCollection = [];

  constructor(nameLibrary, address, phoneNumber) {
    this.NameLibrary = nameLibrary;
    this.Address = address;
    this.phoneNumber = phoneNumber;
  }

  findBook(nameOfTheBook) {
    let book = this.BookCollection.find((book) => book.Title === nameOfTheBook);

    if (book) {
      console.log(book);
    } else {
      console.log(`Livro ${nameOfTheBook} não encontrado.`);
    }
  }

  loanBook(nameOfTheBook) {
    let book = this.BookCollection.find((book) => book.Title === nameOfTheBook);

    if (book) {
      if (book.Availability === true) {
        book.Availability = false;
        return true;
      } else {
        return false;
      }
    } else {
      console.log(`Livro ${book} não encontrado`);
    }
  }

  bookReturn(nameOfTheBook) {
    let book = this.BookCollection.find((book) => book.Title === nameOfTheBook);

    if (book) {
      book.Availability = true;
    } else {
      console.log(`Livro ${book} não encontrado`);
    }
  }
}

let book1 = new Book("Odisseia", "Homero", "Saraiva", "2010");
let book2 = new Book(
  "Porqunhos carinhosos",
  "Sofia Saruman",
  "Novo Sol",
  "1994"
);
let book3 = new Book("Caixa Preta", "Pedro Possualdo", "Little Books", "2022");

let library = new Library("Chico Livros", "Rua indomavel", "45999999");

library.BookCollection.push(book1);
library.BookCollection.push(book2);
library.BookCollection.push(book3);

console.log(library.BookCollection);

library.loanBook("Odisseia");
library.findBook("Odisseia");

library.bookReturn("Odisseia");
library.findBook("Odisseia");
