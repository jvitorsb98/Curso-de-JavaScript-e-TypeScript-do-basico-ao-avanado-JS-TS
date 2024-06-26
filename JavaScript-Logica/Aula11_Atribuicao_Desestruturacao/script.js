const numeros = [1,7,3,4,5,6,7,8,9];
const [numero1, numero2, ...resto] = numeros;
console.log(resto);

const numeros2 =  [ [1,2,3] , [4,5,6] , [7,8,9]];
console.log(numeros2);
console.log(...numeros2);