let input = document.getElementById(`inpt`)
let but = document.getElementById(`but`)
let but1 = document.getElementById(`but1`)
let res1 = document.getElementById(`janela1`)
let res2 = document.getElementById(`janela2`)

but.addEventListener(`click`, adicionar)
but1.addEventListener('click', resultado)

input.addEventListener(`keydown`, function(entrar){
    if(entrar.key === `Enter`){
        adicionar()
    }
})
let numeros = []


function adicionar(){
    if(input.value.trim()=== ''){
        return alert('Insira um valor válido!')
    }

let num = Number(input.value)

if(num < 1 || num > 100){
    alert(`Valor inválido!`)
    input.value = ''
    input.focus()
    return
}
        if(numeros.includes(num)){
        alert('Número já incluso')
        input.value = ''
        input.focus()
        return
    }

numeros.push(num)
let ult = numeros[numeros.length -1 ]
res1.innerHTML += `Valor [<strong>${ult}</strong>] adicionado!<br>`
input.value = ``
input.focus()
}

function resultado(){

    if(numeros.length === 0){
        alert(`Adicione números!`)
        return
    }

    res2.innerHTML = ``
    let totalNum = numeros.length
    let pares = numeros.filter(n => n % 2 === 0)
    let impares = numeros.filter(n => n % 2 !== 0)
    let soma = numeros.reduce((acc, n) => { return acc + n }, 0)
    let dobro = numeros.map(n => n * 2)
    let triplo = numeros.map(n => n * 3)
    let ordem = [...numeros].sort((x, y) => x - y) // ...array cria uma nova copia para usar com sort()
    let media = soma / numeros.length
    let maior = numeros.reduce((acc, n) => {
        if(n > acc){
            return n
        }
        return acc
    })
    let menor = numeros.reduce((acc, n) => {
        if(n < acc){
            return n
        }
        return acc
    })

    

    res2.innerHTML += `Números cadastrados: [<strong>${totalNum}</strong>]<br>`
    res2.innerHTML += `Números em ordem crescente: [<strong>${ordem.join(' | ')}</strong>]<br>`
    res2.innerHTML += `Soma de todos os Números: [<strong>${soma}</strong>]<br>`
    res2.innerHTML += `Dobro dos números: [<strong>${dobro.join(' | ')}</strong>]<br>`
    res2.innerHTML += `Triplo dos números: [<strong>${triplo.join(' | ')}</strong>]<br>`
    res2.innerHTML += `Maior número: [<strong>${maior}</strong>]<br>`
    res2.innerHTML += `Menor número: [<strong>${menor}</strong>]<br>`
    res2.innerHTML += `Números pares: [<strong>${pares.join(' | ')}</strong>]<br>`
    res2.innerHTML += `Números impares: [<strong>${impares.join(' | ')}</strong>]<br>`
    res2.innerHTML += `Média dos números: [<strong>${Math.round(media)}</strong>]<br>`
    
}
