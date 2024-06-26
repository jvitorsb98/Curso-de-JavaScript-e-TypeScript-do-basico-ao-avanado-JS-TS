const elementos = [
    {tag: 'p' , texto: 'Frase 1'},
    {tag: 'div' , texto: 'Frase 2'},
    {tag: 'footer' , texto: 'Frase 3'},
    {tag: 'section' , texto: 'Frase 4'},
]

const container = document.querySelector('.container');
const divMaior = document.createElement('div');
for(let i = 0 ; i < 4 ; i++){
    let tagCriada = document.createElement(elementos[i].tag);
    tagCriada.innerHTML = elementos[i].texto;
    divMaior.appendChild(tagCriada);
}
container.appendChild(divMaior)