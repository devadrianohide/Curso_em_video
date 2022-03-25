function start(){
    var velocidade2 = document.getElementById('velocidader')

    velocidade = Number(velocidade2.value)
    var velmax = 60

    if(velocidade <= velmax){
        resultado.innerHTML = `Você não foi multado, sua velocidade foi de ${velocidade}km/h, continue assim`
        var img = document.createElement('img')
        img.setAttribute('src','guardafeliz.jpg')
    }else if(velocidade < 100){
        resultado.innerHTML = `Você ultrapassou os 60km/h, sua velocidade foi de ${velocidade}km/h, <strong>MULTADO</strong>`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        resultado.style.background = 'yellow'
        resultado.style.color = 'black'
        img.setAttribute('src','guarda1.jpg')
    }else {
        resultado.innerHTML = `${velocidade}km/h ta doido, vamo prender o FDP <br>`
      
        resultado.style.background = 'red'
        var img = document.createElement('img')
        img.setAttribute('src','guarda2.jpg')
    }

    resultado.appendChild(img)



}