//Declaração de função (Function hoisting)
falaOi();
function falaOi(){
    console.log('Oie')
}

// First-class objects (Objetos de primeira classe)

const dado = function(){
    console.log('Sou um dado');
}
dado();

// Arrow function
const arrow = () => {
    console.log("Ola");
}

// dentro de objeto
const obj = {
    falar(){
        console.log('estou falando')
    }
};

obj.falar();