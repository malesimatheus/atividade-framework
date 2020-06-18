alert('Aqui você pode fazer o seu pedido');

let nome = window.prompt('Digite seu nome');

let cep = window.prompt('Insira seu cep (somente números)');

if(cep >= 05500000 && cep <= 09020000) {
    alert('Que bom ' + nome +'! Nós atendemos no seu endereço');
} else {
    alert('Ainda não atendemos sua região, mas estamos trabalhando para isso');
    }

let pratoPrincipal = ['X-Salada', 'X-Egg', 'X-Bacon', 'X-Tudo']

let precoPratoPrincipal = [16, 17, 17, 23]

let escolhaPratoPrincipal = window.prompt('Escolha o Prato Principal:  1)X-Salada  2)X-Egg  3)X-Bacon 4)X-Tudo (Digite apenas o número)');

if (escolhaPratoPrincipal >= 0 && escolhaPratoPrincipal <= 3) {
    alert('Ok, você escolheu um ' + pratoPrincipal[escolhaPratoPrincipal - 1])
} else {
    alert('Ok, você não deseja um Prato Principal')
}

let bebidas = ['Coca', 'Fanta', 'Suco de Laranja', 'Água']

letPrecoBebidas = [5, 5, 7, 3]

let escolhaBebida = window.prompt('Escolha sua bebida:  1)Coca  2)Fanta  3)Suco de Laranja 4)Água (Digite apenas o número)');

if (escolhaBebida >= 0 && escolhaBebida <= 3) {
    alert('Ok, você escolheu ' + bebidas[escolhaBebida - 1])
} else {
    alert('Ok, você não deseja uma bebida')
}

let acompanhamento = ['Batata Frita 300g', 'Nugetts 300g', 'Onion Rings 500g']

let precoAcompanhamento = [7, 9, 9]

let escolhaAcompanhamento = window.prompt('Escolha seu acompanhamento:  1)Batata Frita 300g  2)Nugetts 300g  3)Onion Rings 500g (Digite aoenas o número)')

