
alert('Boas vindas ao jogo do número secreto');
// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let numeroMaximo = 5000;
let chute;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let tentativas = 1;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto){
            alert(`O número secreto é MENOR que ${chute}`);
        }else {
            alert(`O número secreto é MAIOR que ${chute}`);
        }
        // "imcremento" tentativas = tentativas + 1;
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/*
 if(tentativas > 1){
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    }else {
       alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
    }
*/
