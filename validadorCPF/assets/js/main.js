const inputCPF = document.querySelector('.numero-cpf')
const btn = document.querySelector('#btn-cta')
const divHide = document.querySelector('.result')
let arrayVerificado = []

const validador = function (cpf) {
    cpf = inputCPF.value
    if (cpf.length <= 10 || cpf.length > 14) return 'O CPF deve ter 11 digitos'
    if (cpf.match(/^(\s)+$/)) return 'Não pode enviar valores em branco'

    const cpfLimpo = limparCPF(cpf)
    const sequencia = isSequencia(cpfLimpo)

    if (sequencia === cpfLimpo) return 'O CPF não pode ser uma sequencia'

    const cpfAlterado = transformarCPF(cpfLimpo)
    const arrayUmCalculado = calculoArray(cpfAlterado, 10)
    const arrayComMaisDigito = getDigitAddDigit(arrayUmCalculado)
    const arrayDoisCalculado = calculoArray(arrayComMaisDigito, 11)
    const arrayTodosDigitos = getDigitAddDigit(arrayDoisCalculado)
    const readyCPF = arrayTodosDigitos.join('')

    return Number(readyCPF) === Number(cpfLimpo) ? 'CPF Válido' : 'CPF Inválido'
}

const isSequencia = (cpfLimpo) => {
    return cpfLimpo[0].repeat(cpfLimpo.length)
}

const limparCPF = (cpf) => cpf.replace(/\D+/g, '')

const transformarCPF = (cpfLimpo) => {
    let cpfInArray = Array.from(cpfLimpo)
    let numerosCPF = cpfInArray.map(valor => Number(valor))
    numerosCPF.splice(-2, Number.MAX_VALUE)
    for (let v of numerosCPF) { arrayVerificado.push(v) }
    return numerosCPF
}

const calculoArray = (numerosCPF = cpf, multiplicador = 10) => {
    let calculado = numerosCPF.map((valor) => {
        let nM = valor * multiplicador
        multiplicador--
        return nM
    })
    const reducer = (ac, val) => ac + val
    return calculado.reduce(reducer)
}

const getDigitAddDigit = (soma) => {
    const logica = 11 - (soma % 11)
    const digito = logica > 9 ? 0 : logica
    arrayVerificado.push(digito)
    return arrayVerificado
}

const novoEvento = (e) => {
    if (e.target) {
        divHide.classList.remove('hide')
        divHide.style.opacity = 1
        divHide.innerHTML = validador(inputCPF)
    }

    arrayVerificado = []
}

const pressEnter = (e) => {
    if (e.keyCode === 13) {
        divHide.classList.remove('hide')
        divHide.style.opacity = 1
        divHide.innerHTML = validador(inputCPF)
    }

    arrayVerificado = []
}

btn.addEventListener('click', novoEvento)
document.addEventListener('keypress', pressEnter)