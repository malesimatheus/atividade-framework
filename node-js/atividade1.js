let rs = require('readline-sync');

console.log('Vamos realizar o auto-checkin');

let nome = rs.question('Qual é seu nome?');

let voo = rs.question('Qual é o número do seu vôo?');

let fileira = rs.question('Ainda temos disponíveis as fileiras A, B, C, D e F. Qual você deseja?');

let fileirasDisponiveis = ['A', 'B', 'C', 'D', 'F']

if (fileirasDisponiveis.includes(fileira)) {
    console.log('Você escolheu a fileira ' + fileira);
    console.log(nome +', aqui está seu cartão de Embarque: seu vôo é o ' + voo + ' e sua fileira é fileira ' + fileira + '. Desejamos uma boa viagem!');
} else {
    console.log('Fileira Inválida, não foi possível realizar seu checkin!');
}

