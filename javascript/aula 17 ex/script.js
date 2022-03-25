let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100 ){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
    window.alert('Valor já encontrado na lista.')
}

    num.value = ''
    num.focus()
}


//AQUI ACABA A FUNCTION ADICIONAR, E COMEÇA A FINALIZAR.


function finalizar(){
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    }else {
        let tot = valores.length //10 valores
        let maior = valores[0] //2
        let menor = valores[0] //2
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]    
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
    }
}


























/*
let numeros_da_lista1 = []

function adicionar(){
    
    let numero = document.getElementById('entrada')
    let numero2 = Number(numero,value)

    

    if (numero2 <1 || numero2 >100 ){
        window.alert('Numero Invalido')
    }else {
        teste.innerHTML = `${numero2}`
    }  
   
}*/






