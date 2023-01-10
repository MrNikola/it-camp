// unshift() metoda dodaje na pocetku niza jedan ili vise elemenata.
// unshift() prikazuje novu duzinu niza.

const niz = ["cetvrtak", "petak", "subota"];

niz.unshift("sreda");
console.log(niz);

console.log(niz.unshift("ponedeljak", "utorak"));
console.log(niz);

// shift() metoda brise prvi elemnt niza i svimostalimelemntima smanjuje index za 1.
// shift() metoda vraca izbrisani element. Kao kod pop() metode.

console.log(niz.shift());
console.log(niz);

// delete keyword za prisanja odreljenog elementa unutar niza:
// Preko delete keyword mozemo izbrisati bilo koji element iz niza ali na taj nacin ostavljamo rupe u nizu (undefined vrednost).

console.log(niz.length);

delete niz[4];
console.log(niz);

// concat() metoda se koristi za spajanje nizova. concat() metoda pravi novi niz.S tim sto kao argument mozemo poslati i string, ne mora iskljucivo biti niz.

const muskarci = ["Mitar", "Tarik", "Dzenan"];
const devojke = ["Miona", "Merisa", "Hatidza"];
const grupa = muskarci.concat(devojke, "Mehmed", "Omar");
console.log(grupa);

// Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Omar ne sme naci nigde.

// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na neparnim pozicijama unutar originalnog niza.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    arr.push(arr.splice(i, 1)[0]);
  }
}

console.log(arr);

let brojevi = [1, 2, 3, -4, -5, -6];

let suma = 0;

for (let i = 0; i < brojevi.length; ++i) {
  if (brojevi[i] > 0) {
    suma += brojevi[i];
  }
}

console.log(suma);
