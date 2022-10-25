// KONDICIONALI //

// if (uslovi) {
// kod za izvrsavanje u slucaju ispunjenja prvog uslova
// } else if (uslov2) {
// kod za izvrsavanje u slucaju ispunjenja drugog uslova
// } else {
// kod za izvrsavanje u slucaju ne zadovoljavalja svih prethodnih uslova
// }

// Ako je broj godina unet od strane korisnika >

const godine = +prompt("Unesite vase godine:  ");
console.log(godine);

ale;
if (godine >= 0 && godine < 12) {
  alert("Vi ste decijeg doba!");
} else if (godine >= 12 && godine < 18) {
  alert("Vi ste maloletni.!");
} else if (godine >= 18 && godine < 40) {
  alert("Vi ste punoletni.!");
} else if (godine >= 40) {
  alert("Vi ste odrasla osoba.!");
} else if (godine < 0) {
  alert("Uneli ste neatcan broj.!");
}
