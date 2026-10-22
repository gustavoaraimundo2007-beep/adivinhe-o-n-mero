let numeroSecreto=Math.floor(Math.random()*10)+1;

function verificar(){
    let palpite = document.getElementById("inputNumero").value;
    let mensagem = document.getElementById("mensagem");


    if (palpite == numeroSecreto) {
        mensagem.innerText="você acertou!";
    } 
    else if (palpite < numeroSecreto){
        mensagem.innerText="tente um número maior!";
    } else {
        mensagem.innerText="tente um número menor!";
    }

    }
