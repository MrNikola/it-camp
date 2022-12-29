// 1. Osnovni Tipovi Podataka
// (Primitivni Tipovi Podataka)
// (Vrednostni Tipovi Podataka)

// 2. (Referenti Tipovi Podataka)
// Neprimitivni Tipovi Podataka

let brojGodina = 26;
let brojTvojihGodina = brojGodina;

console.log(brojTvojihGodina);

brojTvojihGodina = 22;
console.log(brojTvojihGodina);

console.log(brojGodina);

//////////////////////////////////////////////////////////////////////////

let godine = [20, 21, 18, 17, 17, 19, 18, 17, 18, 19];
let noveGodine = godine;

console.log(noveGodine);
noveGodine.push(34);

console.log(noveGodine);
console.log(godine);
