function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora =zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}


const oneDay = 60 * 60 * 24 * 1000;
const data = new Date(oneDay)
const data2 = new Date(2024,3,20,15,14,6,50)
const data3 = new Date("2019-4-20 20:20:58");
console.log(data.toString());
console.log(data2.toString());
console.log(data3.toString());

const dataBrasil = formataData(data3);
console.log(dataBrasil);