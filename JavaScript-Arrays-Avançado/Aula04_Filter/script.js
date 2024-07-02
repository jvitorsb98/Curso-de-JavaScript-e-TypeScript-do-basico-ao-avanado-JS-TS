const numeros = [5,50,80,1,2,6,4,7,11,15,22,27,3,-2];

const filtrados = numeros.filter((valor,indice,array) => {
    console.log(valor,indice,array);
    return valor > 10;
});

const pessoas = [
    {nome: "Luiz" , idade:62},
    {nome: "Maria" , idade:23},
    {nome: "Eduardo" , idade:55},
    {nome: "Léticia" , idade:19},
    {nome: "Rosana" , idade:32},
    {nome: "Wallace" , idade:47}    
]

console.log(
    pessoas.filter(pessoa => 
        pessoa.nome.slice(-1)=='a'
    )
)