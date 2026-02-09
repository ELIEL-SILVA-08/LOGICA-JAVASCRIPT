
let but = document.getElementById('but')
let res = document.getElementById('res')

but.addEventListener('click', somar)

function anoValido(ano){
    if(ano <= 0){
        return false
    }
    else{
        return true
    }
}

function validar(ano){

if(ano.trim()=== ``){
    return false
}
else{
    return true
}

}

function somar(){

let ano = document.getElementById('inpt').value
let ano1 = Number(ano)

if(!validar (ano) || !anoValido(ano1)){
     res.innerText = `verifique os dados e tente novamente!`
     return
}
else {

if( ano1 % 4 === 0 && ano1 % 100 !== 0  || (ano1 % 400 === 0)){
     res.innerText = `O ano de ${ano1} é Bissexto!`
    return
        }
        
        else{
             res.innerText = `O ano de ${ano1} NÃO é Bissexto!`
             return
        }
    }
}   

    
