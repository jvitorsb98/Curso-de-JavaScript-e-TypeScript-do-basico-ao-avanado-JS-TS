function Produto(nome,preco,estoque){
    this.nome = nome;
    this.preco = preco;
    let __estoque = estoque;
    Object.defineProperty(this,'estoque',{
        enumerable:true,
        configurable:true,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError("Error")
            }
            __estoque = valor
        }
    })
}