// Funkcija u JavaScriptu predstavlja blok koda koji se izvrsava samo prilikom pozivanja iste.
// Mozemo je definisati putem:
// 1. funcion keyword
// 2. arrow funcion sintakse.

// 1. funcion keyword:

// Pravimo funkciju koja sabira broj 3 i broj 5:
function zbirTriIPet() {
  const zbir = 3 + 5;
  return zbir;
  // return 25 sve nakon return u function scope se zanemaruje
  // const omar="Omar"
}

console.log(zbirTriIPet());

// Pravimo funkciju koja sabira dva broja:
function zbirTriIPet(par1, par2) {
  return par1 + par2;
}

console.log(zbirTriIPet(5, 22)); // 5 i 22 predstavljaju argumente funkcije

// Napraviti funkciju koja vraca zbir kvadrata dva broja.

function kvadrati() {
  let broj1 = Number(prompt("Unesite neki broj: "));
  let broj2 = Number(prompt("Unesite neki broj: "));
  return broj1 ** 2 + broj2 ** 2;
}
function kvadrati(a, b) {
  return a ** 2 + b ** 2;
}
console.log(kvadrati(a, b));

// Defultna vrednost nekog parametra:
//Napraviti funkciju koja vraca zbir kvadratadva broj. Ako se izostavidrugi argument, funkcija ga racuna kao 0.
// 1. Nacin
function zbirKvadrata2(a, b) {
  if (b === undefined) {
    return a ** 2;
  } else {
    return a ** 2 + b ** 2;
  }
}
console.log(zbirKvadrata2(2, 3));
console.log(zbirKvadrata2(2));

// 2. Nacin
// Defaultne vrednosti se stavljaju na kraju!!
// Ne moze neka defaultna vrednost bitidefinisana pre obavezne!
function zbirKvadrata3(a, b = 0) {
  return a ** 2 + b ** 2;
}
console.log(zbirKvadrata2(5));
console.log(zbirKvadrata2(5, 1));

// Jos jedan nacin definisanja funkcije preko function keyword:
const aritmetickaSredina = function (par1 = 1, par2 = 1, par3 = 1) {
  return (par1 + par2 + par3) / 3;
};
console.log(aritmetickaSredina(4, 5, 3));
console.log(aritmetickaSredina(4, 5));
console.log(aritmetickaSredina());
