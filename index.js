const botaoPLayPause = document.getElementById('play-pause')
const botaoBackward = document.getElementById('anterior')
const botaoForward = document.getElementById('proximo')
const audioCapitulo = document.getElementById('audio-capitulo')
const capitulo = document.getElementById('capitulo')
//numero de faixas de musica
const numeroCapitulos = 10
let taTocando = 0
let capituloAtual = 1
function tocarFaixa(){
    audioCapitulo.play();
    botaoPLayPause.classList.remove('bi-play-circle-fill')
    botaoPLayPause.classList.add('bi-pause-circle-fill')
}
function pausarFaixa(){
    audioCapitulo.pause();
    botaoPLayPause.classList.remove('bi-pause-circle-fill')
    botaoPLayPause.classList.add('bi-play-circle-fill')
    
}
function tocarOuPausar(){
    if(taTocando === 0){
        tocarFaixa();
        taTocando = 1
        
    }else{
        pausarFaixa()
        taTocando = 0
    }
}
function trocarNomeFaixa(){
    capitulo.innerText = `Capítulo ${capituloAtual}`
}
function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1
    }else{
        capituloAtual += 1 
    }
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa()
    taTocando = 1
    trocarNomeFaixa()
}
function anteriorFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1
    }else{
        capituloAtual -= 1 
    }
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`

    tocarFaixa()
    taTocando = 1
    trocarNomeFaixa()
}

botaoPLayPause.addEventListener('click', tocarOuPausar)
proximo.addEventListener('click', proximaFaixa)
anterior.addEventListener('click', anteriorFaixa)



