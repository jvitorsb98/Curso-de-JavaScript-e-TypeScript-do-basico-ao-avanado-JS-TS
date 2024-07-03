const pessoas = [
    {id: 2 , nome: 'Maria'},
    {id: 3 , nome: 'Luiz'},
    {id: 1 , nome: 'Helena'},

];

const novasPessoas = new Map();
for(let pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}

for(let pessoa of novasPessoas.values()){
    console.log(pessoa)
}