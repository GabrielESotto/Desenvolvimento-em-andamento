class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')

        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const validFields = this.isFieldValid();
        const validPassword = this.isPasswordValid();

        if (validFields && validPassword) {
            alert('Formulario enviado')
            this.formulario.submit()
        }
    }

    isPasswordValid() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if (senha.value !== repetirSenha.value) {
            valid = false
            this.createError(senha, 'Senha e repetir senha precisam ser iguais')
            this.createError(repetirSenha, 'Senha e repetir senha precisam ser iguais')
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false
            this.createError(senha, 'Senha precisa estar entre 6 e 12 caracteres')
            this.createError(repetirSenha, 'Senha precisa estar entre 6 e 12 caracteres')
        }

        return valid
    }

    isFieldValid() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for (let field of this.formulario.querySelectorAll('.validar')) {
            const label = field.previousElementSibling.innerText
            if (!field.value) {
                this.createError(field, `Campo "${label}" não pode estar em branco`)
                valid = false
            }

            if (field.classList.contains('cpf')) {
                if (!this.validaCPF(field)) valid = false
            }

            if (field.classList.contains('usuario')) {
                if (!this.validaUsuario(field)) valid = false
            }
        }

        return valid
    }


    validaUsuario(field) {
        const usuario = field.value
        let valid = true

        if (usuario.length > 12 || usuario.length < 3) {
            this.createError(field, 'Usuario precisa ter entre 3 e 12 caracteres')
            valid = false
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'Usuario precisa conter apenas letras e/ou numeros')
            valid = false
        }

        return valid
    }

    validaCPF(field) {
        const cpf = new ValidadorCPF(field.value)

        if (!cpf.valida()) {
            this.createError(field, 'CPF Inválido')
        }
        return true
    }

    createError(field, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        field.insertAdjacentElement('afterend', div)
    }

}

const valida = new ValidaFormulario()