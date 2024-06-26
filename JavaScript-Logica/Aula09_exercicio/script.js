// function atualizaHora(){
//     const box = document.querySelector('.box');
//     const horaAgora = new Date();
//     const diaSemanaTexto = getDiaSemanaTexto(horaAgora.getDay());
//     const diaSemanaNumber = horaAgora.getDate();
//     const mesTexto = getMesTexto(horaAgora.getMonth());
//     const anoNumber = horaAgora.getFullYear();
//     const hora = horaAgora.getHours();
//     const minutos = horaAgora.getMinutes();

//     box.innerHTML = `${diaSemanaTexto}, ${diaSemanaNumber} de ${mesTexto} de ${anoNumber} ${hora}:${minutos} <br>`;
    
// }

// function getDiaSemanaTexto(diaSemana){
//     let diaSemanaTexto;
//     switch(diaSemana){
//         case 0:
//             diaSemanaTexto = 'Domingo';
//             break;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//             break;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             break;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//             break;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//             break;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             break;
//         case 6:
//             diaSemanaTexto = 'Sábado';
//             break;
//     }

//     return diaSemanaTexto;
// }

// function getMesTexto(mes) {
//     let mesTexto;
//     switch(mes) {
//         case 0:
//             mesTexto = 'Janeiro';
//             break;
//         case 1:
//             mesTexto = 'Fevereiro';
//             break;
//         case 2:
//             mesTexto = 'Março';
//             break;
//         case 3:
//             mesTexto = 'Abril';
//             break;
//         case 4:
//             mesTexto = 'Maio';
//             break;
//         case 5:
//             mesTexto = 'Junho';
//             break;
//         case 6:
//             mesTexto = 'Julho';
//             break;
//         case 7:
//             mesTexto = 'Agosto';
//             break;
//         case 8:
//             mesTexto = 'Setembro';
//             break;
//         case 9:
//             mesTexto = 'Outubro';
//             break;
//         case 10:
//             mesTexto = 'Novembro';
//             break;
//         case 11:
//             mesTexto = 'Dezembro';
//             break;
//         default:
//             mesTexto = 'Mês inválido';
//     }

//     return mesTexto;
// }



// atualizaHora();

function atualizaHora2(){
    const box = document.querySelector('.box');
    const data = new Date();
    box.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full' , timeStyle: 'short'});
}

atualizaHora2();
