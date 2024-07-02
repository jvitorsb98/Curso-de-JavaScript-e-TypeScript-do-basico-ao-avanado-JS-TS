const numeros = [5,50,80,1,2,6,4,7,11,15,22,27,3];


const total = numeros.filter(valor => valor%2===0).map(valor => valor*2).reduce( (acumulador,valor) => acumulador+=valor);
console.log(total)