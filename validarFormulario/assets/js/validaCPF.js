// Validando CPF com classes

class ValidadorCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            value: cpf.replace(/\D+/g, ''),
            enumerable: true,
            configurable: false
        })
    }

    isSequency() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    geraNovoCPF() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digitoUm = ValidadorCPF.geraDigito(cpfSemDigitos)
        const digitoDois = ValidadorCPF.geraDigito(cpfSemDigitos + digitoUm)
        this.novoCPF = cpfSemDigitos + digitoUm + digitoDois
    }

    // Eu nao utilizo a palavra this em um metodo, eu n preciso da instancia e pode ser static
    // Apenas tenho que trocar o this dos metodos chamados "this.geraDigito" para "Class.geraDigito"
    static geraDigito(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for (let stringNumerica of cpfSemDigitos) {
            let multiplicacao = Number(stringNumerica) * reverso
            reverso--
            total += multiplicacao
        }

        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }

    valida() {
        if (!this.cpfLimpo) return false
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.cpfLimpo.length !== 11) return false
        if (this.isSequency()) return false
        this.geraNovoCPF()

        return this.novoCPF === this.cpfLimpo
    }
}