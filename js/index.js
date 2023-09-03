window.onload=()=>{
    "use strick"
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js")
    }
}

var jogador = 1;
var casas = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
var marcar = new Array()
var posicao = 0;


function fazerJogada(ncasas) {
    var casa = document.getElementById(`casa${ncasas}`);

    if (casas[ncasas] === 0) {
        casas[ncasas] = jogador;
        marcar.push(ncasas);//o push() adiciona um valor em um array

        if (jogador === 1) {
            casa.textContent = 'X';
            jogador = 2;
        } else {
            casa.textContent = 'O';
            jogador = 1;
        }

        posicao++;

        if (verificar()) {
            document.getElementById('vencedor').textContent = 'Jogador ' + (jogador === 1 ? 'O' : 'X') + ' venceu!';
            desabilitar()
        } else if (posicao === 9) {
            document.getElementById('vencedor').textContent = 'Empate!';
            desabilitar()
        }
    }
}


function verificar() {
    var vitoria = false;
  

    if (casas[0] !== 0) {
        if (casas[0] === casas[1] && casas[1] === casas[2]) {
            vitoria = true;
        }
        if (casas[0] === casas[3] && casas[3] === casas[6]) {
            vitoria = true;
        }
        if (casas[0] === casas[4] && casas[4] === casas[8]) {
            vitoria = true;
        }
    }

    if (casas[1] !== 0 && casas[1] === casas[4] && casas[4] === casas[7]) {
        vitoria = true;
    }

    if (casas[2] !== 0) {
        if (casas[2] === casas[5] && casas[5] === casas[8]) {
            vitoria = true;
        }
        if (casas[2] === casas[4] && casas[4] === casas[6]) {
            vitoria = true;
        }
    }

    if (casas[3] !== 0 && casas[3] === casas[4] && casas[4] === casas[5]) {
        vitoria = true;
    }

    if (casas[6] !== 0 && casas[6] === casas[7] && casas[7] === casas[8]) {
        vitoria = true;
    }

    return vitoria;
}



function desabilitar() {
    for (var i = 0; i < 9; i++) {
        var casa = document.getElementById(`casa${i}`);
        casa.onclick = null;
    }
}

