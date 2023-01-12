// 1. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

function prvizadatak() {
  let broj = prompt("Unesite broj:");
  let suma = "";
  for (let i = 0; i < broj.length; i++) {
    if (broj[i] % 2 === 0 && broj[i + 1] % 2 === 0) {
      suma += broj[i] + "-";
    } else {
      suma += broj[i];
    }
  }
  return suma;
}
alert(prvizadatak());
9;
