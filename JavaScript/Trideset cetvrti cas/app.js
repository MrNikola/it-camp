// callback funkcije //

// callback funkcija predstavlja funkciju koju saljemo kao argument neke druge funkcije.
// Sam argument ne treba da bude izvrsavanje

function glavnaFunkcija(func) {
  console.log("Radnja unutar glavne funkcije.");
  func();
  console.log("Kraj glavne funkcije.");
}

function callback() {
  console.log("Radnja unutar callback funkcije.");
}

glavnaFunkcija(callback);

// Napraviti glavnu funkciju unutar koje ce se desiti ispis sta ona predstavlja, a celu stvar ce da izvrsi callback funkcija. Callback funkcija ima 2 parametra, i ispisuje rezultat par1 stepenovan pa2.

const mainFunction = (callback2) => {
  console.log("Prvi broj stepenovan drugim je:");
  callback2(2, 3);
};

const callBack2 = (par1, par2) => {
  console.log(par1 ** par2);
};

mainFunction(callBack2);
