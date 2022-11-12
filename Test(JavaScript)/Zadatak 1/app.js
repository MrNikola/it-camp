let broj = Number(prompt("Unesite neki realan broj: "));
if (isNaN(broj)) {
  console.log("Niste uneli broj.");
} else {
  console.log(broj * broj);
}
