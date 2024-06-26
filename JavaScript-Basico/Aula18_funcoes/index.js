function saudacao(nome){
    console.log(`Olá ${nome}`);
}


function soma(x =1 ,y =1 ){
    return x+y;
}

saudacao("Joao");

console.log(soma(3))

const raiz = function(n){
    return n**0.5;
};

const raiz2 = n => n**0.5;

console.log(raiz2(49))