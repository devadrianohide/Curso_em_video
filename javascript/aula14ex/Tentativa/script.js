function start(){
    var number = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    
    
    if(number.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        alert('Impossivel Contar sem um numero inicial')
    }else {
     
        contagem.innerHTML = `Contando: <br>`
        let number2 = Number(number.value)
        let fim2 = Number(fim.value)
        let passo2 = Number(passo.value)
        if(passo2 <=0){
            alert('Passo nulo, considerando 1 para iniciar')
            passo2 = 1
        }

        if(number2 < fim2){
            //contagem crescente
            for(let c = number2 ; c <= fim2 ; c += passo2 ){
                contagem.innerHTML += `${c} \u{1F449}`
            }
        }else {
            //contagem decrescente
            for(let c = number2 ; c >= fim2 ; c -= passo2 ) {
                contagem.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    } 
}
