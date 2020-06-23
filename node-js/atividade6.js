let rs = require('readline-sync');

let nome = rs.question('Qual é seu nome?');

let texto = rs.question('Digite qualquer coisa...');

let n1 = 17;
let n2 = 21;
let n3 = 25;
let n4 = 53;
let n5 = texto.length;

console.log('Você digitou ' + texto.length + ' caracteres');

if (n5 < n1) {
    console.log(nome + ', você é o 5º no ranking');
} else if (n5 < n2) {
    console.log(nome + ', você é o 4º no ranking');
} else if (n5 < n3) {
    console.log(nome + ', você é o 3º no ranking');
} else if (n5 < n4) {
    console.log(nome + ', você é o 2º no ranking');
} else {
    console.log('Parabéns ' + nome + ', você é o 1º no ranking')
}