
let res = document.getElementById('res')
let but = document.getElementById('but')

but.addEventListener('click', somar)

function cal(num1, num2, op){
    if(op === '+'){
        return num1 + num2
    }
    else if(op === '-'){
        return num1 - num2
    }
    else if(op === '*'){
        return num1 * num2
    }
    else{
        return num1 / num2
    }
}

function validar(num1, num2){

    if(num1.trim()=== ``|| num2.trim()=== ``){
        return false
    }
    else{
        return true
    }
}

function somar(){

    let n1 = document.getElementById(`inpt1`).value
    let n2 = document.getElementById(`inpt2`).value 
    let op = document.getElementById('op').value


    let num1 = Number(n1)
    let num2 = Number(n2)

        if(!validar (n1, n2)){

        return res.innerText = 'Verifique os dados e tente novamente!'
    }
    else{

        if(op === '/' && num2 === 0){
            return res.innerText = 'Não é possivel dividir por 0'
        }
        
        let s = cal(num1, num2, op)

        res.innerText = s

        

    }

}
