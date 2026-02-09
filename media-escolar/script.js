
let but = document.getElementById('but')
let res = document.getElementById('res')

but.addEventListener('click', somar)

function cal(n1, n2, n3, n4){
   return (n1 + n2 + n3 + n4) / 4
   
}

function validar(n1, n2, n3, n4){
    if( n1.trim()=== '' ||n2.trim()=== '' ||
        n3.trim()=== '' ||n4.trim()=== '' ) {
            return false
        }
        else{
            return true
        }
    }

function validarNotas(n1, n2, n3, n4){

    if (n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10 ||
        n4 < 0 || n4 > 10 ){

            return false
        }
        else{
            return true
        }     

}

function somar(){

let n1 = document.getElementById('inpt1').value
let n2 = document.getElementById('inpt2').value
let n3 = document.getElementById('inpt3').value
let n4 = document.getElementById('inpt4').value

let nota1 = Number(n1)
let nota2 = Number(n2)
let nota3 = Number(n3)
let nota4 = Number(n4)

if(!validar(n1, n2, n3, n4) || !validarNotas(nota1, nota2, nota3, nota4)){
    res.innerText = `verifique os dados e tente novamente!`
    return
}
else{

let media = cal(nota1, nota2, nota3, nota4)

    let notasBaixas = 0
        if (nota1 < 6) notasBaixas++
        if (nota2 < 6) notasBaixas++
        if (nota3 < 6) notasBaixas++
        if (nota4 < 6) notasBaixas++

if(media < 5){
    res.innerHTML = `Sua média é ${media} Você está REPROVADO! Quantidades de notas abaixo de 6: ${notasBaixas}.`
    return
}
else if(media >= 5 && media < 7){
    res.innerHTML = `Sua média é ${media} Você está de RECUPERAÇÃO! Quantidades de notas abaixo de 6: ${notasBaixas}`
    return
        }
else {
    res.innerHTML = `Sua média é ${media} Você está APROVADO! Quantidades de notas abaixo de 6: ${notasBaixas}`
    return
        }
    }
}
