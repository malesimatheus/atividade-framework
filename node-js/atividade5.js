let rs = require('readline-sync');

let valor = rs.question('Digite qualquer coisa, e saiba quantos caracteres!');

let quantidade = valor.length;

console.log('Você digitou ' + quantidade + ' caracteres.');