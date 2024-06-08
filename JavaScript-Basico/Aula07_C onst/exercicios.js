const name = "Luiz Otávio";
const lastName = "Miranda";
const age = 26;
const weight = 84;
const heightWithM = 1.80;
let IMC;
let birthYear;


IMC = weight/(heightWithM*heightWithM);
birthYear = 2024 - age;

console.log(`${name} ${lastName} has ${age} years, weighs ${weight} kg`)
console.log(`${name} has ${heightWithM} of height in M and was born in ${birthYear}`)