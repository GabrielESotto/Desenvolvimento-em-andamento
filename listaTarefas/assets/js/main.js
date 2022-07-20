const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

const criaLi = () => {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

const limpaInput = () => {
    inputTarefa.value = ''
    inputTarefa.focus()
}

const criaBotaoApagar = (li) => {
    li.innerText += '  '
    const botaoApagar = document.createElement('button')
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'Apagar esta tarefa')
    botaoApagar.innerText = 'Apagar'
    li.appendChild(botaoApagar)
}

const criaTarefa = (textoInput) => {
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}

const salvarTarefas = () => {
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('apagar')) {
        el.parentElement.remove()
        salvarTarefas()
    }
})

const adicionaTarefasSalvas = () => {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()