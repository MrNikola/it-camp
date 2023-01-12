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
