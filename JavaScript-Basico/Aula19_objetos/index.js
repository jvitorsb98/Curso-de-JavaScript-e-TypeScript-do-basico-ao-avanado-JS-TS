function criaPessoa(nome,sobrenome,idade){
    return {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    };
}

const pessoa2 = {
    nome:"Luiz",
    sobrenome: "Miranda",
    idade:25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} de ${this.idade} anos está falando oi`)
    }

};



// const pessoa1 = criaPessoa("Luiz","Otávio",25);

pessoa2.fala();