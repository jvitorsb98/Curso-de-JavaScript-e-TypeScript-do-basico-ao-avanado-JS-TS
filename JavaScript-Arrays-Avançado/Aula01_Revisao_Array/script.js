const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
delete nomes[2];
console.log(nomes)

const novo = [...nomes];
console.log(novo)
novo.push('Carla');
novo.unshift('Paulao')
nomes.shift();
console.log(nomes)
console.log(novo)

const nome = "Luiz otavio miranda";

const novoArray = nome.split(' ');
console.log(novoArray)
const newNome = novoArray.join(' ');
console.log(newNome)