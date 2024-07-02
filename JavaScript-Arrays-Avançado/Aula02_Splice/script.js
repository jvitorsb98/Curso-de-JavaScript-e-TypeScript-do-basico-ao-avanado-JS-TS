const nomes = ['Maria','João','Eduardo','Gabriel','Júlia'];
const removidos =  nomes.splice(-2,2);
console.log(nomes);
console.log(removidos)

const adicionados = nomes.splice(2,1,'Alemao');
console.log(nomes)