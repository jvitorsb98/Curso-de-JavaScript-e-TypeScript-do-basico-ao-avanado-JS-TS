const numeros = [5,50,80,1,2,6,4,7,11,15,22,27,3,-2];

const dobro = numeros.map(valor => valor*2);

const pessoas = [
    {nome: "Luiz" , idade:62},
    {nome: "Maria" , idade:23},
    {nome: "Eduardo" , idade:55},
    {nome: "Léticia" , idade:19},
    {nome: "Rosana" , idade:32},
    {nome: "Wallace" , idade:47}    
]

const nomes = pessoas.map( pessoa => pessoa.nome);

const comIds = pessoas.map( (obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice +1 ;
    return obj;
})


console.log(comIds)
