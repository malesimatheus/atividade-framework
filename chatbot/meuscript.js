alert('Olá, vamos ver qual número é maior?');

let num1 = window.prompt('Digite o primeiro número');

let num2 = window.prompt('Digite o segundo número');

if(num1 > num2) { 
    alert('O número maior é ' + num1)
} else {
    if(num1 < num2) {
        alert('O número maior é ' + num2)
    } else {
        alert('São iguais')
    }
}

