const inputTarefa = document.querySelector('.input-nova-tarefa');
const btnNovaTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');
let listaTarefas = [];
buscaTarefas();
function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(texto){
    const li =  criaLi();
    li.innerText = texto;
    criaBotaoApagar(li);
    insereTarefa(li);
}
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class','apagar')
    btnApagar.setAttribute('title','apagar essa tarefa');
    li.appendChild(btnApagar);
}

function insereTarefa(li){
    tarefas.appendChild(li);
    salvarTarefas();
}

btnNovaTarefa.addEventListener('click',function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    limpaInput();

})

inputTarefa.addEventListener('keypress' , function(event){
    if(event.keyCode == 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})

document.addEventListener('click',function(event){
    const elemento = event.target;
    if(elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas(){
    const listaTarefas = tarefas.querySelectorAll('li');
    const litaTarefasArray = [];
    for(let tarefa of listaTarefas){
        let tarefaTexto = tarefa.innerText.replace('Apagar','').trim();
        litaTarefasArray.push(tarefaTexto);
    } 

    const tarefasJSON = JSON.stringify(litaTarefasArray);
    localStorage.setItem('tarefas',tarefasJSON)
}

function buscaTarefas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);

    for(let tarefa of listaTarefas){
        criaTarefa(tarefa)
    }

}