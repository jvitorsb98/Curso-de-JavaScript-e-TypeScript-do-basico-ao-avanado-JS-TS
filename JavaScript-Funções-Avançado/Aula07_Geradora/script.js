function* geradora1(){

    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';

}

const g1 = geradora1();

function* contador(){
    let i = 0 ;
    while(true){
        yield i;
        i++;
    }
}

const g2 = contador();


console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for(let valor of g4){
    console.log(valor)
}