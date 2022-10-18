// 1. var
var x; // deklarisanje promenjive x (obezbedjivanje lokacijske memorije za promenjivu x)
x = 15; // inicijalizacija promenjive x (dodela vrednosti vec deklarisanoj promenjive)
// var x = 15 - takodje dozvoljeno
console.log(x);

// Redeklarisanje promenljive x definisane putem var keyword je dozvoljeno,
// bilo gde u prostoru.
var x;
// Reinicijalizacija promenljive x definisane putem var keyword je dozvoljeno,
// bilo gde u prostoru.
x = 22;

// 2. let - Definisanje promenljive za koju postoji mogucnost promene vrednosti
let y; // deklarisanje promenjive y (obezbedjivanje lokacijske memorije za promenjivu x)
y = 14; // inicijalizacija promenjive y (dodela vrednosti vec deklarisanoj promenjive)
// let y = 14
console.log(y);

let a, b, c; // korektan nacin deklarisanja promenljivih

// Redeklarisanje definisane putem left keyword nije dozvoljeno ako govorimo o istom prostoru
// ako se radi o istom prostoru.
// let y;

// Reinicijalizacija promenljive definisane putem let keyword je dozvoljeno
// u bilo kom prostoru.
y = 12;
console.log(y);

// Promenljive koje su definisane putem let ili const keyword nam obezbedjuju
// Block Scope.
{
  //  console.log(y); - prepoznanje se promenljiva iz Global Scope.
  // Redeklaracija promenljive definisane putem let, u drugom prostoru je dozvoljena.
  let y = 19;
  console.log(y);
}
// Ispisuje se 12, odnosno poslednja dodeljena vrednost unutar Global Scope.
console.log(y);

// 3. counst
// Promenljive definisane putem const moraju biti odjednom deklarisane i inicija
// const z;
// z = 26;
const z = 26;
console.log(z);

// NIJE DOZVOLJENA NI REDEKLARACIJA, NI REINICIJALIZACIJA.

// Redeklarisanje promenljive definisane putem const nije dozvoljeno,
// kada se radi o istom prostoru.
// const z = 23;

// Redeklarisanje promenljive definisane putem const nije dozvoljena,
// kada se radi o istom prostoru.
// z = 23
// console.log(z);

// Sve karakteristike koje vaze za promenljive definisane putem let
// u Block Scope, vaze i za promenljive definisane putem const keyword.

const cars = ["Audi", "Golf", "Mercedes", "BMW", "Nissan"];
