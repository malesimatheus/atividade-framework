alert('Aqui você pode fazer o seu pedido');

let nome = window.prompt('Digite seu nome');

let cep = window.prompt('Insira seu cep (somente números)');

if(cep >= 05500000 && cep <= 09020000) {
    alert('Que bom ' + nome +'! Nós atendemos no seu endereço');
} else {
    alert('Ainda não atendemos sua região, mas estamos trabalhando para isso');
    }

let numeroDaCasa = window.prompt('Insira o número da sua casa')

let pratoPrincipal = ['X-Salada', 'X-Egg', 'X-Bacon', 'X-Tudo'];

let precoPratoPrincipal = [16, 17, 17, 23];

let escolhaPratoPrincipal = window.prompt('Escolha o Prato Principal:  1)X-Salada  2)X-Egg  3)X-Bacon 4)X-Tudo (Digite apenas o número)');

let itemPratoPrincipal = (escolhaPratoPrincipal - 1);

if (escolhaPratoPrincipal >= 1 && escolhaPratoPrincipal <= 4) {
    alert('Ok, você escolheu um ' + pratoPrincipal[itemPratoPrincipal]);
} else {
    alert('Ok, você não deseja um Prato Principal');
}


let bebidas = ['Coca', 'Fanta', 'Suco de Laranja', 'Água'];

let precoBebidas = [5, 5, 7, 3];

let escolhaBebida = window.prompt('Escolha sua bebida:  1)Coca  2)Fanta  3)Suco de Laranja 4)Água (Digite apenas o número)');

let itembebida = (escolhaBebida - 1);

if (escolhaBebida >= 1 && escolhaBebida <= 4) {
    alert('Ok, você escolheu ' + bebidas[itembebida]);
} else {
    alert('Ok, você não deseja uma bebida');
}


let acompanhamento = ['Batata Frita 300g', 'Nugetts 300g', 'Onion Rings 500g'];

let precoAcompanhamento = [7, 9, 9];

let escolhaAcompanhamento = window.prompt('Escolha seu acompanhamento:  1)Batata Frita 300g  2)Nugetts 300g  3)Onion Rings 500g (Digite apenas o número)');

let itemAcompanhamento = (escolhaAcompanhamento - 1);

if (escolhaAcompanhamento >= 1 && escolhaAcompanhamento <= 4) {
    alert('Ok, você escolheu ' + acompanhamento[itemAcompanhamento]);
} else {
    alert('Ok, você não deseja um acompanhamento');
}


let precoTotal = (precoAcompanhamento[itemAcompanhamento] + precoBebidas[itembebida] + precoAcompanhamento[itemAcompanhamento]);

alert('Você pediu 1 ' + pratoPrincipal[itemPratoPrincipal] + ', 1 ' + bebidas[itembebida] + ', e 1 ' + acompanhamento[itemAcompanhamento]);

alert('O valor do seu pedido é de R$ ' + precoTotal);

let formaDePagamento = window.prompt('Como deseja pagar?  1)Dinheiro  2)Cartão de Débito');

let troco = 0;

if(formaDePagamento = 1) {
    troco = window.prompt('Deseja troco pra qual valor?');
    console.log('Troco para ' + troco);
} else {
    console.log('Não precisa de troco');
}

alert('Seu pedido foi realizado com sucesso');

console.log('O pedido é 1 ' + pratoPrincipal[itemPratoPrincipal] + ', 1 ' + bebidas[itembebida] + ', e 1 ' + acompanhamento[itemAcompanhamento]);
console.log('O valor do pedido é de R$' + precoTotal);
console.log('O cep é ' + cep + 'e o número é ' + numeroDaCasa)