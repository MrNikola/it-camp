// indexOf() metoda vraca poziciju elementa koji predstavlja argument date metode.

const niz = ["Hatidza", "Bakir", "Amer", "Bakir", "Alen"];

const bakir = niz.indexOf("Bakir");
console.log(bakir + 1);

// indexOf() metoda vraca -1 ako se neki element ne nalazi u nizu.

const omar =
  niz.indexOf("Omar") === -1 ? "nije dolazio" : niz.indexOf("Omar") + 1;

console.log(omar);
// Drugi argument predstavlja poziciju od koje trazimo.
const hatidza = niz.indexOf("Hatidza", 1);
console.log(hatidza);

// lastIndexOf() metoda vraca poziciju poslednjeg pojavljivanja elementa koji predstavlja argument date metode.
// lastIndexOf() metoda vraca -1 ako se neki element ne nalazi u nizu.

const lastBakir = niz.lastIndexOf("Bakir");
console.log(lastBakir);

// Array.from() nam vraca niz, koji se pravi od nekog objekta koji ima length.

const noviNiz = Array.from("SVAKO SLOVO CE BITI POSEBAN ELEMENT NIZA");
console.log(noviNiz);

// includes() metoda nam vraca boolean u zavisnosti od toga da li se argument nalazi u nizu.

console.log(niz.includes("Emin"));

// keys() metoda vraca Array Iterator Object sa kljucevima(indeksima) nekog niza.

const indeksi = niz.keys();
console.log(indeksi);

for (let index of indeksi) {
  console.log(index);
}

const elementi = (parN) => {
  const niz1 = ["Hatidza", "Bakir", "Amer", "Alen"];
  if ((parN = 1)) {
    return niz1.indexOf("Hatidza");
  } else if ((parN = 2)) {
    return niz1.indexOf("Bakir");
  } else if ((parN = 3)) {
    return niz1.indexOf("Amer");
  } else if ((parN = 4)) {
    return niz1.indexOf("Alen");
  } else if (parN < 4) {
    return niz1;
  }
};
console.log(elementi(3));

//6 zadatak w3school excersiese arrays
