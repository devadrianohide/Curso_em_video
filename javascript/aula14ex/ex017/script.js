function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor. digite um numero')
        
    }else {
        let n = Number(num.value) 
        let c = 1
        tab.innerHTML = '' ///essa linha serve pra limpar a tabuada
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // essa linha coloca um value (tipo um id) dentro do option criado, ficando tab1 tab2 tab3 etc...
            
            tab.appendChild(item)
            c++
        }
    }
    
}