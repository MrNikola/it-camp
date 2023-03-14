// for (var i = 0; i < 3; i++) {
//    setTimeout(() => console.log(i), 1000);
// }

// 3 3 3

// for (var i = 0; i < 3; i++) {
//    setTimeout(() => console.log(i), 1000);
// }

// 0 1 2

const getUsers = () => {  
 return fetch("")
 .then((response) => response.json())
 .then((data) => console.log(data))
 .catch((error) => console.log(error.message))
 .finally(() => setTimeout()
};

getUsers();

// Asinhrona funkcija za prikupljanje podataka sa servera
const getUsers = async () => {
    const data = await fetch("");
    const user = await data.json();
} 

// Prikupiti sve usere, a nakon toga vratiti json sa svim userima koji su prikazani sa oderedjenim svojstvima:
// id, name, username, email(ispisan malim slovima), phone, adress sa svojstvima street, suite.

