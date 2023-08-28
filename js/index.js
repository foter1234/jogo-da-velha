window.onload=()=>{
    "use strick"
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js")
    }
}

var jogador= 1;
var jogada =false
var casas = new array[0,0,0,0,0,0,0,0,0]
var marcar = new array()
var posicao = 0 

function changeImage() {
    elem = document.querySelector('.bg-img');

    // Setting the backgroundImage to an url
    elem.style.backgroundImage = "url('https://cdn.awsli.com.br/600x450/2437/2437567/produto/215734022/5822484585_1-p8irc8tqsy.jpg')";
}