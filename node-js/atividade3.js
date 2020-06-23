let rs = require('readline-sync');

console.log('Aqui vamos calcular a área do quadrado!');

let lado = Number(rs.question('Qual é o lado do quadrado (em metros)?'));

let area = lado * lado;

console.log('A área do quadrado é ' + area + ' m²');