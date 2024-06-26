const alunos = ['Luiz','Maria','João'];
const nome = 'Luiz otávio';
console.log(alunos);

alunos.push('ola')

console.log(alunos);
console.log(alunos[1]);
console.log(alunos.length)

alunos.unshift("Luiza")
console.log(alunos);

alunos.pop();
console.log(alunos);
alunos.shift();
console.log(alunos);
delete alunos[1];
console.log(alunos);

console.log(alunos.slice(0,2))
console.log(alunos.slice(-1))

console.log(alunos instanceof Array);