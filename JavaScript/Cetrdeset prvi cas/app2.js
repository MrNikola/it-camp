// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};
myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;
console.log(mycar);

myCar.povecanjeBrzine = function (ubrazanje) {
if (this.trenutnaBrzina + ubrzanje > this.maksimalnaBrzina) { 
return ` Nije moguce voziti preko maksimalne brzine.`;
} else {
    this.trenutnaBrzina += ubrazanje;
}
};

myCar.povecanjeBrzine(30);
console.log(myCar);
// console.log(myCar.povecanjeBrzine(240));

myCar.smanjenjeBrzine = function (smanjenje) {
    if (this.trenutnaBrzina - smanjenje < 0) {
        return `Ne mozete smanjiti brzinu za tu vrednost.`;
    } else {
        this.trenutnaBrzina -= smanjenje;
        return { trenutnaBrzina: this.trenutnaBrzina}
    }
};

console.log(myCar.smanjenjeBrzine(40));
console.log(myCar.smanjenjeBrzine(25));
console.log(myCar);

myCar.koci = function
