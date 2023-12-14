let listaDeNumerosSorteador = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela(`h1`, `jogo do numero secreto`);
    exibirTextoNaTela(`p`, `Escolha um numero entre 1 e 10`);
}
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acerto');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); //escolhendo o botao reiniciar
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'o numero e menor');

        } else {
            exibirTextoNaTela('p', 'o numero secreto e maior');
        }

        tentativas++; //para somar quando erra
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteador.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteador = [];
    }
    if (listaDeNumerosSorteador.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteador.push(numeroEscolhido);
        console.log(listaDeNumerosSorteador);
        return numeroEscolhido;
    }


}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarjogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

exibirMensagemInicial();








//let titulo = document.querySelector('h1');
//let paragrafo = document.querySelector('p');
//titulo.innerHTML = 'jogo do numero secreto';
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';