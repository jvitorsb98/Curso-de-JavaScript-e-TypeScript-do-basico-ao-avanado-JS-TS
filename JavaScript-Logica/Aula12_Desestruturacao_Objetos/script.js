const pessoa = {
    // nome: 'Luiz',
    sobrenome: "Miranda",
    idade: 30,
    endereco: { 
        rua: "Av Brasil",
        numero: 320
    }
};

const {nome = "não existe" , sobrenome} = pessoa;
const {endereco: { rua,numero} , ...resto} = pessoa;

console.log(nome,sobrenome ,rua, numero,resto)