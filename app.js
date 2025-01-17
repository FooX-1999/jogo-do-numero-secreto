let listaNumeroSorteado = [];
let numerLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, `Brazilian Portuguese Female` , {rate:1.2});
}

function exibirMensagemInicial() {
exibirTextoNaTela(`h1`, `jogo do numero secreto`);
exibirTextoNaTela(`p`, `Digite um numero 1 e ${numerLimite}`);
}

exibirMensagemInicial();

  function verificarChute() {
    let chute = document.querySelector(`input`).value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
      exibirTextoNaTela(`h1`, `Acertou`);
      let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
      let mensagemTentativa = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}.`;
      exibirTextoNaTela(`p`, mensagemTentativa);
      document.getElementById(`reiniciar`).removeAttribute('disabled');
    } else {
      if(chute > numeroSecreto){
        exibirTextoNaTela('p', `O numero secreto e menor que ${chute}`);
      }else{
        exibirTextoNaTela(`p`, `O numero secreto e maior que ${chute}`)
      }
      tentativas++
      limparCampo();
    }
  }

  function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numerLimite + 1);
    let quantidadeDeElementos = listaNumeroSorteado.length;

    if (quantidadeDeElementos == numerLimite){
      listaNumeroSorteado = [];
    }

    if (listaNumeroSorteado.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
    }else{
      listaNumeroSorteado.push(numeroEscolhido);
      console.log(listaNumeroSorteado);
      return numeroEscolhido;
    }
  }

  function limparCampo() {
    chute = document.querySelector(`input`);
    chute.value = ``;
  }

  function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById(`reiniciar`).setAttribute('disabled', true);
  }