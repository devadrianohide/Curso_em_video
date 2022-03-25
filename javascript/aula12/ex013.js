var agora = new Date()
var diasem = agora.getDay()
/*
    0 = Domingo
    1 = seg
    2 = ter
    3 = quar
    4 = quin
    5 = sex
    6 = sab
*/
console.log('Hoje é: ')

switch(diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado uhul')
        break     
        
    default:
        console.log('Dia invalido')
        break    
}