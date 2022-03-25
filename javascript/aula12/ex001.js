var idade = 66
if(idade <16) {
    console.log('Não vota')
}else if(idade >= 16 && idade < 18 || idade > 65){ //aqui dava pra deixar só idade < 18
    console.log('Voto opcional!')
}else if (idade >= 18){ // esse não precisava tbm, era so por else { }
    console.log('Voto obrigatório')
}