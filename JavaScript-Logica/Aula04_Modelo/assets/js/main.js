function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEvento(event){
        event.preventDefault();
        const inputPeso = form.querySelector('#input-peso').value;
        const inputAltura = form.querySelector('#input-altura').value;
        let imc;

        resultado.style.backgroundColor = 'white';
        resultado.innerHTML = '';

        if(isNaN(peso) || peso < 1){
            resultado.innerHTML = "<p>Peso Inválido</p>";
            resultado.style.backgroundColor = "lightcoral";
            return;

        }

        if(isNaN(altura) || altura < 0.5){
            resultado.innerHTML = "<p>Altura Inválida</p>";
            resultado.style.backgroundColor = "lightcoral";
            return;
        }

        const peso = Number(inputPeso);
        const altura = Number(inputAltura);

        imc = calculadoraIMC(peso,altura);
        console.log(imc)
        switch (true) {
            case imc < 18.5:
                resultado.innerHTML = `<p>Abaixo do peso (IMC: ${imc.toFixed(2)})</p>`;
                resultado.style.backgroundColor = "lightblue"; 
                break;
            case imc >= 18.5 && imc <= 24.9:
                resultado.innerHTML = `<p>Peso normal (IMC: ${imc.toFixed(2)})</p>`;
                resultado.style.backgroundColor = "lightgreen";
                break;
            case imc >= 25 && imc <= 29.9:
                resultado.innerHTML = `<p>Sobrepeso (IMC: ${imc.toFixed(2)})</p>`;
                resultado.style.backgroundColor = "yellow"; 
                break;
            case imc >= 30 && imc <= 34.9:
                resultado.innerHTML = `<p>Obesidade Grau I (IMC: ${imc.toFixed(2)})</p>`;
                resultado.style.backgroundColor = "orange";
                break;
            case imc >= 35 && imc <= 39.9:
                resultado.innerHTML = `<p>Obesidade Grau II (IMC: ${imc.toFixed(2)})</p>`;
                resultado.style.backgroundColor = "orangered"; 
                break;
            case imc >= 40:
                resultado.innerHTML = `<p>Obesidade Grau III (IMC: ${imc.toFixed(2)})</p>`;
                resultado.style.backgroundColor = "red"; 
                break;
        }

    }


    form.addEventListener('submit',recebeEvento);

}

function calculadoraIMC(peso , altura){
    return peso/(altura*altura);
}


meuEscopo();