// Objekti su glavna stvar u JavaScript_u.

// const niz = ["Amer", "Bakir", "Aladin"];
//                0        1         2

// Objekti su promenljive koje sadrze vise vrednosti.
// Predstavljaju se u key:value parovima.

const person = {
  firstName: "Nikola",
  lastName: "Bozovic",
  age: 18,
  adult: true,
};

console.log(person);
// Pristupanje odredjenim vrednostima objekta mozemo izvrsiti na 2 nacina:
// Jedan key:value

// 1. objectName.propertyName (person.firstName)

// 2. objectName["propertyName"](person["firstName"])

console.log(person.firstName);
const punoletnost = person.adult === true ? "jeste" : "nije";
console.log(`${person["firstName"]} ${punoletnost} punoletan.`);

// Object Methods //
// Objekti takodje mogu imati metode.
// Metode su funkcije koje ce se izvrsiti na objektu.
// Metode su skladistene u svojstvima kao definicije funkcije.

const person2 = {
  firstName: "Alen",
  lastName: "Muslic",
  age: 17,
  adult: false,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person2.fullName());

// u JavaScriptu this je keyword (rezervisana rec) koja ukazuje na neki objekat.
// this nije promenljiva i ne mozemo promeniti vrednost this.

// this ukazuje na razlict objekat u zavisnosti od toga gde se koristi.

// * U nekom objektu this ukazuje na taj objekat;
// * U global scope this ukazuje na global object.

// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime, prezime, broj indeksa, ocene (niz svih)
