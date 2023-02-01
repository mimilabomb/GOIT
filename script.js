// function myFunction() {
//   const element = document.getElementById("id01");
//   element.innerHTML = "New Heading";
// }

// function myColorChange() {
//   const element = document.getElementById("id01");
//   element.style.color = "red";
// }
// const paczka = {
//   name: "",
//   ulica: "",
// };

// const przesylka2 = {
//   name: "",
//   ulica: "",
// };

// przesylka2.waga = 20;
// paczka.name = "list";
// przesylka2.name = "paczka";

// function mojaFunkcja() {
//   for (let i = 0; i <= 20; i += 5) {
//     console.log(i);
//   }
// }
// function mojaFunkcja1() {
//   const target = 4;
//   let sum = 0;

//   for (let i = 0; i < target; i += 1) {
//     console.log("Twoje i wynosi: " + i);
//     console.log("Obliczenie: " + sum + " + " + i + " =");
//     sum += i;
//     console.log("Wynik: " + sum);
//   }
//   console.log(sum);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const loc = user.location;
// console.log(loc);

// const country = user.location.country;
// console.log(country);

// function myFunction() {
//   const element = document.getElementById("id01");
//   element.innerHTML = "New Heading";
// }

// function myColorChange() {
//   const element = document.getElementById("id01");
//   element.style.color = "red";
// }

// function mojaFunkcja(imie) {
//   const clients = ["Mango", "Poly", "Ajax"];
//   const clientNameToFind = "Patryk";
//   let message;

//   for (const client of clients) {
//     if (client === imie) {
//       message = "Klient z takim imieniem jest w bazie danych!";
//       break;
//     }

//     message = "Nie znaleźliśmy takiego klienta w bazie danych!";
//   }
//   console.log(message);
// }

// const user = {
//   name: "",
//   tag: "",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
//   setName(aaa) {
//     this.name = aaa;
//   },
//   getName() {
//     console.log("Witaj uzytkowniku: " + this.name);
//   },
// };
// user.age = 25;
// user.setName("Krzysiu");
// user.getName();

// console.log(paczka.name);
// console.log(paczka.waga);
// console.log(przesylka2.name);
// console.log(przesylka2.waga);
//////////////////////////////////

function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

const przesylka = {
  name: "",
  ulica: "",
};

const przesylka2 = {
  name: "",
  ulica: "",
};

przesylka2.waga = 20;
przesylka.name = "List";
przesylka2.name = "Paczka";

function mojaFunkcja(id) {
  const element = document.getElementById("id01");
  const element2 = document.getElementById("id02");

  if (id === 1) {
    //instrukcja dla przycisku o przesyłce 1
    informacja = "Typ twojej przesyłki to: " + przesylka.name;
    element.innerHTML = informacja;

    informacja = "Przesyłak nie posiada wagi";
    element2.innerHTML = informacja;
  } else if (id === 2) {
    //instrukcja dla przycisku o przesyłce 2
    informacja = "Typ twojej przesyłki to: " + przesylka2.name;
    element.innerHTML = informacja;

    informacja = "Waga twojej przesyłki to: " + przesylka2.waga + "kg";
    element2.innerHTML = informacja;
  }
}

function greet(name) {
  console.log(`Pozdrawiam ${name}`);
  return `Pozdrawiam ${name}.`;
}

function dodawanie(a, b, c) {
  return a + b + c;
}

function greet(name2) {
  console.log(`Pozdrawiam ${name2}.`);
  return name2;
}

function registerGuest(name, parametr) {
  console.log(`Rejestracja gościa ${name}.`);

  parametr(name);
}

greet("Kiwi");
console.log(greet("Kiwi"));
console.log(greet);

registerGuest("Mango", greet);

function processCall(recipient) {
  const liczba = Math.random() > 0.5;

  console.log(liczba);
  console.log(!liczba);

  if (!liczba) {
    console.log(
      "Abonent " + recipient + " jest niedostępny, zostaw wiadomość."
    );
  } else {
    console.log(`Łączenie z ${recipient}, proszę czekać...`);
  }
}

processCall("Mango");

function processCall1(recipient, onAvailable, onNotAvailable) {
  // Symuluj dostępność abonenta za pomocą liczby losowej
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`Łączenie z ${name}, proszę czekać...`);
  // Logika odbierania połączenia
}

function activateAnsweringMachine(name) {
  console.log(`Abonent ${name} jest niedostępny, zostaw wiadomość.`);
  // Logika aktywacji automatycznej sekretarki
}

function leaveHoloMessage(name) {
  console.log(`Abonent ${name} jest niedostępny, nagrywamy hologram.`);
  // Logika nagrywania hologramu
}

processCall1("Mango", takeCall, activateAnsweringMachine);
processCall1("Poly", takeCall, leaveHoloMessage);
