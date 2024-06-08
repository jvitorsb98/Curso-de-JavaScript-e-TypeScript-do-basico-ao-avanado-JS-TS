let varA = 'A';
let varB = 'B';
let varC = 'C';
let temp;

temp = varA;

varA = varB;
varB = varC;
varC = temp;

console.log(varA,varB,varC);