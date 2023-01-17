// filter() metoda kreira novi niz sa onim elementima koji su prosli test.
// Novodobijeni niz moze imati maksimalno elemenata kao niz na koji se primenuje metoda, takodje moze biti prazan niz.

const godine = [19, 17, 20, 17, 16, 15, 19, 20]
const punoletni = godine.filter(function (element) {
    return element > 17;
});
console.log(punoletni);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima starog niza, gde je drugo slovo "e".
const niz = [
    "Bakir",
    "Haris",
    "Amer",
    "Dzenan",
    "Hasan",
    "Aladin",
    "Nikola",
    "Merisa",
    "Emin",
    "Alen",
    "Miona",
    "Mitar",
];

const niz2 = niz.filter((el) => el[1] === "e");
console.log(niz2);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija je duzina <= 6.

const niz3 = niz.filter((el) => el.length <= 4);
console.log(niz3);

// Napraviti novi niz koji filtrira postojeci i vraca novi 
// sa onim elementima ciji je tip "boolean".
const newArr = ["Rec", "Dve RECi", 26, true, false, [true, false], 49, true]

const boolArr = newArr.filter((el) => typeof el === "boolean");
console.log(boolArr)

// Napraviti funkciju koja pravi niz koji se iz postojeceg napraviti novi uz ispunjenje uslova:
// value > 2 => value * 7
// value > 2 and value < 8 => (value*4)/2
// Ostale vrednosti da ne uzima u obzir
// I na kraju treba novi niz vratiti sa godinama <10.

function secondTask(arr) {
    const newArr = arr.filter((el) => el > 2)
    const newArr2 = newArr.map((el) => {
        if (el < 8){
            return el * 2;
        } else {
            return el * 7;
        }
        });
        const newArr3 = newArr2.filter((el) => el < 10);
        return newArr3;
    }
    console.log(secondTask([-1 , 2, 3, 4, 6, 9 ,12, 14]));

    // reduce() metoda vraca jednu vrednost. Iteracija  se vrsi kroz ceo niz.

    // Sabrati sve elemente niza:
    // 
    const zbirGodina = godine.reduce((previusValue, currentValue)) => previusValue + currentValue
