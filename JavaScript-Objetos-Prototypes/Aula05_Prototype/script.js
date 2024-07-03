function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB,objA)