const slider = document.querySelector('#slider')
const button = document.querySelector('#button')
const numberSelected = document.querySelector('#valor')
const password = document.querySelector('#password')
const containerHide = document.querySelector('#container-password')

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@"
let novaSenha = ""

numberSelected.innerHTML = slider.value

slider.oninput = function () {
    numberSelected.innerHTML = this.value
}

function generatePassword() {
    let pass = ""

    for (let i = 0, n = charset.length; i < slider.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    containerHide.classList.remove('hide')
    password.innerHTML = pass
    novaSenha = pass
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha)
    alert('Senha copiada com sucesso')
}