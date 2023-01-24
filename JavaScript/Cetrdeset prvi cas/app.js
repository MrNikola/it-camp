// Napraviti glavnufunkciju koja ispisuje poruku da se radi o glavnoj funkciji, ali ispod toga neka se izvrsi pozivanje callback funkcije koja ima zadatak da izracuna aritmeticku sredinu 3 broja koja predstavljaju argumente te callback funkcije.

const main = (other) => {
  console.log("Radnja glavne funkcije...");
  other();
};

const other = (first, second, third) => {
  return +((first + second + third) / 3).toFixed(2);
};
console.log(main(other(10, 20, 30)));
