const form = document.getElementById('formContato')
const nomes = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    const inputNome = document.getElementById('inputNome')
    const inputTel = document.getElementById('inputTel')

    if (nomes.includes(inputNome.value)) {
        alert(`O contato: ${inputNome.value} já foi inserido`)
    } else {
        nomes.push(inputNome.value)
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTel.value}</td>`
        linha += '</tr>'
    
        linhas += linha
    }

    inputNome.value = ''
    inputTel.value = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}