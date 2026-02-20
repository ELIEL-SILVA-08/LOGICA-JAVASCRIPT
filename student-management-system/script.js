
        // adicionadno elementos html ao js
let input1 = document.getElementById(`inptNAME`)
let input2 = document.getElementById(`inptNUM`)
let but1 = document.getElementById(`but1`)
let but2 = document.getElementById(`but2`)
let but3 = document.getElementById(`but3`)
let res1 = document.getElementById(`janela1`)
let res2 = document.getElementById('janela2')

        // atribuindo os botoes do html ao js
but1.addEventListener(`click`, addNome)
but2.addEventListener(`click`, resultado)
but3.addEventListener(`click`, limpar)

let alunos = []

        // Function do botao Adicionar
function addNome(){


    let nome = input1.value.trim()
    let nota = Number(input2.value)


        // previnindo bugs
    if(nome === ""){
        alert("Insira um nome válido!")
        return
    }
    else if(nome.length <= 3) {
        alert('Nome do Aluno muito abreviado!')
        return
    }
    else if(nota < 0 || nota > 10 || input2.value.trim() === ""){
        alert('Nota inválida')
        return
    }

        // atribuindo o objeto aluno a array
    let aluno = {
        nome: nome,
        nota: nota
    }
        // Objeto aluno colocado dentro da array alunos
    alunos.push(aluno)


        // config da primera janela de resultados

    let divAluno = document.createElement(`div`)                 //
    let texto = document.createElement(`span`)                   // --> criando elementos html dentro da
    let buttRemove = document.createElement(`button`)            //     div da primera janela de resultados
    let buttEdite = document.createElement(`button`)             //
    
    
    texto.innerHTML = `Nome: ${aluno.nome} - Nota: ${aluno.nota}  |  `  

        // botoes remover e editar (TEXTO QUE VAI APARECER NA TELA!)
    buttRemove.innerText = `x`                                          
    buttEdite.innerText = `+`   
    
        // classList para estilizar no css
    buttRemove.classList.add(`remove`)
    buttEdite.classList.add(`edite`)

        // botao remover aluno
    buttRemove.addEventListener(`click`, function(){

        // remover array tbm
        alunos = alunos.filter(n => n !== aluno )
        divAluno.remove()
    })


        // botao editar nota
    buttEdite.addEventListener('click',function(){

        let notaNova = Number(input2.value)

        if(notaNova < 0 || notaNova > 10){
            alert("Digite uma nota válida!")
            input2.focus()
            return
        }

        aluno.nota += notaNova

            //controle de bug do botao editar para notas maiores que 10
        if(aluno.nota > 10){
            texto.innerHTML = `Nome: ${aluno.nome} - Nota: 10`
            alert("Aluno atingiu nota máxima!")
            input2.focus()
            return
        }

        texto.innerHTML = `Nome: ${aluno.nome} - Nota: ${aluno.nota}  |  `
        input2.value = ``
        input2.focus()

    })


        //appendChild adiciona dentro da div 'divAluno' outras divs
    divAluno.appendChild(texto)
    divAluno.appendChild(buttRemove)
    divAluno.appendChild(buttEdite)
    res1.appendChild(divAluno)


    input1.value = ''
    input2.value = ''
    input1.focus()
    
}


        // config do botao resultado - imprime na segunda janela.

function resultado(){

    res2.innerHTML = `` 

    if(alunos.length === 0){
    res2.innerHTML = "Nenhum aluno cadastrado."
    return
}

            // filtrando os dados da array [alunos]
    let aprovados = alunos.filter(aluno => aluno.nota >= 7)
    let recuperacao = alunos.filter(aluno => aluno.nota >= 5 && aluno.nota < 7)
    let reprovados = alunos.filter(aluno => aluno.nota < 5)

    let quantidade = Number(alunos.length)

    let soma = alunos.reduce((acc, aluno) => { return acc + aluno.nota}, 0)

    let porentAprov = Number(aprovados.length) / quantidade 
    let porcentRecup = Number(recuperacao.length) / quantidade
    let porcentReprov = Number(reprovados.length) / quantidade

    let aluno10 = alunos.filter(aluno => aluno.nota == 10)

                // PARTE DE IMPRESSÃO NA SEGUNDA JANELA


                        //Total de alunos cadastrados
    res2.innerHTML += `<strong>Alunos Cadastrados:</strong><br>  [${quantidade}]<br><br>`


                        // Média das notas
    res2.innerHTML += `<strong>Média notas:</strong><br>[ ${(soma / quantidade).toFixed(2)} ]<br><br>`


                        // Multiplicar por 100 pra ficar em porcentagem
    res2.innerHTML += `<strong>Porcentagem de alunos APROVADOS:</strong><br>
                        [ ${(porentAprov * 100).toFixed(2)} % ]<br>
                       <strong><br>Porcentagem de alunos de RECUPERAÇÃO:</strong><br>
                        [ ${(porcentRecup * 100).toFixed(2)} % ]<br>
                       <strong><br>Porcentagem de alunos REPROVADOS:</strong><br>
                        [ ${(porcentReprov * 100).toFixed(2)} % ]<br>`


                        // Aluno nota 10
    res2.innerHTML += `<br><strong>Alunos nota 10:</strong><br>`
    
        aluno10.forEach(aluno => {
            res2.innerHTML += `[ ${aluno.nome} ]  |  <br><br>`
        })

            // Alunos aprovados
    res2.innerHTML += '<strong>Aprovados:</strong><br>'
        aprovados.forEach(aluno => {
            if(aluno.nota > 10){
                res2.innerHTML += `${aluno.nome} - Nota: 10 <br>`
                return
            }
            res2.innerHTML += `${aluno.nome} - Nota: ${aluno.nota}<br>`
        })
            // Alunos de revuperacao
    res2.innerHTML += '<strong><br>Recuperação:</strong><br>'
        recuperacao.forEach(aluno => {
            res2.innerHTML += `${aluno.nome} - Nota: ${aluno.nota}<br>`
        })
            // Alunos reprovados
    res2.innerHTML += '<strong><br>Reprovados:</strong><br>'
         reprovados.forEach(aluno => {
            res2.innerHTML += `${aluno.nome} - Nota: ${aluno.nota}<br>`
        })

}


        // function limpar -> limpa todos os dados das duas janelas e da array
function limpar(){

    if(!window.confirm(`Isso pagará todos os dados!`)){
        return 
    }

  alunos = []
  res1.innerHTML = ``
  res2.innerHTML = ``
}
