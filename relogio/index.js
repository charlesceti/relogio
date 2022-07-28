function tempo(){
    const date = new Date ()
    let hora = date.getHours()
    let minuto = date.getMinutes()
    let segundo = date.getSeconds()

    hora=atualizar(hora)
    minuto=atualizar(minuto)
    segundo=atualizar(segundo)

document.querySelector(".relogio").innerHTML = hora + " : " + minuto + " : " + segundo
setTimeout(tempo,1000)

}

function atualizar(tempo){
    if(tempo <10) {
        return "0" + tempo
    }else {
        return tempo
    }
}



tempo()