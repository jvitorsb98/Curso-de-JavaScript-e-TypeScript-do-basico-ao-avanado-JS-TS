let number = Number(prompt("Digite um numero: "));
document.body.innerHTML+= `<strong>Seu número é ${number}</strong> <br>`;
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(number)} <br>`;
document.body.innerHTML += `${number} é inteiro: ${Number.isInteger(number)} <br>`;
document.body.innerHTML += `É NaN: ${Number.isNaN(number)} <br>`;
document.body.innerHTML += `Arredondado para baixo: ${Math.floor(number)} <br>`;
document.body.innerHTML += `Arredondado para cima : ${Math.ceil(number)} <br>`;
document.body.innerHTML += `Com duas casas decimais : ${number.toFixed(2)} <br>`;