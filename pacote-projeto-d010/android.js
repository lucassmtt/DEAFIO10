function init(){
    let video = document.getElementsByClassName('video')
    let botao = document.getElementsByClassName('btn')
    btn[0].onclick = function() {video.poster = ''}
    btn[1].onclick = function() {video.poster = 'bugdroid.png'}
    btn[2].onclick = function() {alert('Largura de vídeo: ' +video.width+'px')}
    btn[3].onclick = function() {video.width*1.2}
    btn[4].onclick = function() {video.width = '400'}
    btn[5].onclick = function() {alert('Nível de volume do audio (0-1):'+video.volume)}
    btn[6].onclick = function(){
        if (video.paused){
            alert('O som está pausado!')
        }else if (video.ended) {
            alert('O vídeo encerrou!')
        }else{
            alert('O vídeo está rodando')
        }
    }
    btn[7].onclick = function(){
        var atributos = 'Os atributos dos elementos são: \n'
        if (video.currentScr) atr += 'srn\n'
        if (video.controls) atr += 'controls\n'
        if (video.autoplay) atr += 'autoplay\n'
        if (video.loop) atr += 'loop\n'
        if (video.poster) atr += 'poster\n'
        if (video.id) atr += 'id\n'
        if (video.width) atr += 'width\n'
        if (video.height) atr += 'height\n'
        alert(atr)
    }
    btn[8].onclick = function(){
        alert('A duração do vídeo é de: ' +video.duration+ 'segundos')
    }
    btn[9].onclick = function(){
        alert('O tempo de execução no click foi de '+video.currentTime+'segundos')
    }
    window.onload
}