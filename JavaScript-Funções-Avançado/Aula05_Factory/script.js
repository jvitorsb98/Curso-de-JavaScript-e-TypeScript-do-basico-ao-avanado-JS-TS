function criaPessoa(nome,sobrenome,altura,peso){
    return {
        nome,
        sobrenome,
        fala: function(assunto){
            return `${this.nome} de ${peso} kg está ${assunto}.`
        },
        peso:peso,
        altura:altura,
        get imc(){
            const indice = this.peso/(this.altura **2);
            return indice.toFixed(2); 
        }
    };
}


const p1 = criaPessoa("joao","Ramos",1.8,69);
console.log(p1.fala("estudando"));
console.log(p1.imc);