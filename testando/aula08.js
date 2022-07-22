let valueCPF = '458.477.198-76'

const alterarCPF = () => {
    return valueCPF.replace(/\D+/g, '')
}

const reduzindoCPF = (cpf) => {
    cpf = alterarCPF()
    cpfArray = Array.from(cpf)
    numerosCPF = cpfArray.map(valor => Number(valor))
    numerosCPF.splice(-2, Number.MAX_VALUE)
    return numerosCPF
}


const multiplicarArray = () => {
    let cpfNoArray = reduzindoCPF()
    let arrayMultiplicado = []
    let calculador = 10

    cpfNoArray.map((valor) => {
        let firstResult = valor * calculador
        calculador--
        arrayMultiplicado.push(firstResult)
    })

    return arrayMultiplicado
}

const somarArray = () => {
    const arrayMult = multiplicarArray()
    return arrayMult.reduce((ac, valor) => ac += valor)
}

const getFirstDigit = () => {
    const somaArray = somarArray()
    let resultado = 11 - (somaArray % 11)
    if (resultado > 9) {
        return 0
    } else {
        return resultado
    }
}

const adicionarDigitoNoArray = () => {
    primeiroDigito = getFirstDigit()
    arrayCPF = reduzindoCPF()
    arrayCPF.push(primeiroDigito)
    return arrayCPF
}

const multiplicarSegundoArray = () => {
    let cpfMaisUmDigito = adicionarDigitoNoArray()
    let arrayMultiplicadoDois = []
    let calculadorDois = 11
    cpfMaisUmDigito.map((valor) => {
        let secondResult = valor * calculadorDois
        calculadorDois--
        arrayMultiplicadoDois.push(secondResult)
    })
    return arrayMultiplicadoDois
}

const somarSegundoArray = () => {
    const segundoArrayMult = multiplicarSegundoArray()
    return segundoArrayMult.reduce((ac, valor) => ac += valor)
}

const getSecondDigit = () => {
    const somaSegundoArray = somarSegundoArray()
    let result = 11 - (somaSegundoArray % 11)
    if (result > 9) {
        return 0
    } else {
        return result
    }
}

const adicionarUltimoDigito = () => {
    let ultimoDigito = getSecondDigit()
    let ultimoArray = adicionarDigitoNoArray()
    ultimoArray.push(ultimoDigito)
    return ultimoArray
}

const transformarCPF = () => {
    const cpf = adicionarUltimoDigito()
    const readyCPF = cpf.join('')
    return Number(readyCPF)
}

const checarCPF = () => {
    const cpfFinalizado = transformarCPF()
    const cpfIncio = alterarCPF()
    if (cpfFinalizado === Number(cpfIncio)) {
        return `CPF [${cpfFinalizado}]: é válido!`
    } else {
        return `CPF [${cpfFinalizado}]: não é válido!`
    }
}

console.log(checarCPF())