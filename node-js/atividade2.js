let rs = require('readline-sync');

let mascara = rs.question('Você está usa máscara ao sair de casa?');

let mao = rs.question('Você está lavando as mãos com frequência?');

if (mascara == 'Sim' && mao == 'Sim') {
    console.log('Parabéns, você está se cuidando');
} else {
    console.log('Você precisa se cuidar mais, a saúde é o mais importante!');
}