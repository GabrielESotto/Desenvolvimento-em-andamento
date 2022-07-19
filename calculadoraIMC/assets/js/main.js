function meuEscopo() {
    const form = document.querySelector('#form');
    const result = document.querySelector('.result')
    const peso = document.querySelector('#peso')
    const altura = document.querySelector('#altura')

    const recebeMostraEventoForm = (event) => {
        event.preventDefault()
        mostrarResultado()
    };

    const calculo = () => {
        peso.value = Number(peso.value)
        altura.value = Number(altura.value)
        const resultCalc = peso.value / (altura.value ** 2)
        return resultCalc.toFixed(2)
    }

    const mostrarResultado = () => {
        result.innerHTML = condition()
    }

    const condition = () => {
        if (peso.value > 200 || peso.value < 10 || altura.value > 3.00 || altura.value < 0.70) {
            return `Valor fora dos limites estipulados`
        } else if (calculo() < 18.5) {
            return `Seu IMC é ${calculo()} (Abaixo do peso)`
        } else if (calculo() >= 18.5 && calculo() <= 24.99) {
            return `Seu IMC é ${calculo()} (Peso normal)`
        } else if (calculo() >= 25 && calculo() <= 29.99) {
            return `Seu IMC é ${calculo()} (Sobrepeso)`
        } else if (calculo() >= 30 && calculo() <= 34.99) {
            return `Seu IMC é ${calculo()} (Obesidade Grau 1)`
        } else if (calculo() >= 35 && calculo() <= 39.99) {
            return `Seu IMC é ${calculo()} (Obesidade Grau 2)`
        } else if (calculo() > 40) {
            return `Seu IMC é ${calculo()} (Obesidade Grau 3)`
        } else {
            return `O valor digitado não é um numero`
        }
    }

    form.addEventListener('submit', recebeMostraEventoForm)
}
meuEscopo()