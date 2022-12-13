// JavaScript prepoznaje samo jedan tip podatka za brojeve.
// U pitanju je number tip podatka i oni mogu biti zapisani sa ili bez decimalnog zareza.

// Veliki brojevi mogu biti zapisani sa tzv. exponent oznakom:

const petica = 5e6;
console.log(petica);

const noviBroj = 555e-5;
console.log(noviBroj);

// Sto se tice sabiranja decimalnih brojeva JavaScript nije bas najbolji kalkulator.

const x = 0.1;
const y = 0.2;
const z = x + y;
console.log(z);

// + operator:
console.log("10" + 10); // "1010"

console.log("10" - 2); // 8

// NaN - Not a Number
// NaN je JavaScript rezervisana rec koja ukazuje da broj nije korektan.
// Nan je tipa number !!!

// Za proveru da li je neka vrednost korektan broj se koristi !isNaN()

console.log(isNan(100 / "Apple"));

// Infinity (ili -Infinity) je vrednost kojucemoda dobijamo kada rezultat premasi najveci broj u JavaScriptu(bude veoma mali broj).

const a = 25;
const c = -1;
const b = 0;

console.log(a / b);
console.log(c / b);

console.log(typeof Infinity);
console.log(typeof -Infinity);

// rgb(0, 255, 123)
// #12ab33
// rgby

// Hexadecimal numbers:
// Ako su brojevi napisani prefiksom 0xFF rezultat ce biti 255.

const r = 0xff;
console.log(r);
