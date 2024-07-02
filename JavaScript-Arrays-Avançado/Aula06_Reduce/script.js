const numeros = [5,50,80,1,2,6,4,7,11,15,22,27,3];


const total = numeros.reduce( (total,valor) => total+= valor)

console.log(total)