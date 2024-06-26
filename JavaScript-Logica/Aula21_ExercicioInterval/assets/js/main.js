function formatTime(segundos) {
    const date = new Date(segundos * 1000);
    return date.toISOString().substr(11, 8);
}

let segundos = 0;
const relogio = document.querySelector('.relogio');
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnZerar = document.querySelector('.zerar');
let timer;
relogio.innerHTML = formatTime(segundos);

btnIniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = formatTime(segundos);
    }, 1000);
});

btnPausar.addEventListener('click' , function(event){
    clearInterval(timer);
    relogio.classList.add('pausado');
})

btnZerar.addEventListener('click' , function(event){
    segundos = 0;
    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML = formatTime(segundos);
})