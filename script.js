function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()

    hora.textContent = `${hora}:${minuto}:${segundos}`;

    msg.innerHTML = `Agora são ${hora} Horas, ${minuto} minutos e ${segundos} segundos.`

    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'manha.png'
        document.body.style.background = '#FEE12B'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#FFA07A'
    }else{
        //Boa noite!
        img.src = 'noite.png'
        document.body.style.background = '#1E212D'
    }
}
setInterval(carregar, 1000);