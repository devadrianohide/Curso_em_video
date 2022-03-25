function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e verifique novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        //esses dois atributos abaixo, o create e o set, cria a imagem e o set da um id
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){  
                //criança 
                img.setAttribute('src', 'bebehomem.png')
            }else if ( idade <21){
                //jovem
                img.setAttribute('src', 'jovemmenino.png')
            }else if ( idade < 50){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10){  
                //criança 
                img.setAttribute('src', 'bebemenina.png')
            }else if ( idade <21){
                //jovem
                img.setAttribute('src', 'jovemmenina.png')
            }else if ( idade < 50){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }     
        
        
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`  
        res.style.textAlign = 'center'
        res.appendChild(img)// esse comando manda aparecer na tela com os atributos que é mencionado, no caso img
    }
}