const produto = {nome: 'Caneca' , preco: 1.8};
const outraCoisa = {...produto};

outraCoisa.nome = 'Luiz Otávio';
outraCoisa.preco = 2.5;


const caneca = {...produto , distribuidor: 'Paulao'}

console.log(produto,outraCoisa,caneca)
Object.freeze(produto)
console.log(Object.getOwnPropertyDescriptor(produto,'nome'))