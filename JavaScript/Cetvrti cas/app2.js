// KONDICIONALI //

// if (uslovi) {
// kod za izvrsavanje u slucaju ispunjenja prvog uslova
// } else if (uslov2) {
// kod za izvrsavanje u slucaju ispunjenja drugog uslova
// } else {
// kod za izvrsavanje u slucaju ne zadovoljavalja svih prethodnih uslova
// }

// Ako je broj godina unet od strane korisnika >

const godine = prompt("Unesite vase godine:  ");
console.log(godine);
if (godine >= 18) alert("punoletni ste");
else if (godine <= 18) alert("maloletni ste");
