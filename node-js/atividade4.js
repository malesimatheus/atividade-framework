let rs = require('readline-sync');

console.log('Vamos descobrir qual é seu signo?');

let dia = Number(rs.question('Qual o dia do seu nascimento?'));

let mes = Number(rs.question('Qual o mês do seu aniversário?'));

switch (mes) {
    case 01 :
        (dia <= 20) ? console.log('Capricórnio') : console.log('Aquário');
        break;
    case 02 : 
        (dia <= 18) ? console.log('Aquário') : console.log('Peixes');
        break;
    case 03 :
        (dia <= 20) ? console.log('Peixes') : console.log('Áries');
        break;
    case 04 :
        (dia <= 19) ? console.log('Áries') : console.log('Touro');
        break;
    case 05 :
        (dia <= 20) ? console.log('Touro') : console.log('Gêmeos');
        break;
    case 06 :
        (dia <= 21) ? console.log('Gêmeos') : console.log('Câncer');
        break;
    case 07 :
        (dia <= 22) ? console.log('Câncer') : console.log('Leão');
        break;
    case 08 :
        (dia <= 22) ? console.log('Leão') : console.log('Virgem');
        break;
    case 09 :
        (dia <= 22) ? console.log('Virgem') : console.log('Libra');
        break;
    case 10 :
        (dia <= 22) ? console.log('Libra') : console.log('Escorpião');
        break;
    case 11 :
        (dia <= 21) ? console.log('Escorpião') : console.log('Sagitário');
        break;
    case 12 :
        (dia <= 21) ? console.log('Sagitário') : console.log('Capricórnio');
        break;
    default :
        console.log('Data inválida');
}