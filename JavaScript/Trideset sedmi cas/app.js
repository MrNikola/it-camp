let broj = 0;
for (let i = 999; i >= 100; i--) {
  for (let j = 999; j >= 100; j--) {
    let broj1 = i * j;
    let s = String(broj1);
    let rs = s.split("").reverse().join("");
    if (s === rs) {
      broj = Math.max(broj, broj1);
    }
  }
}

console.log(broj);
