var numeroInput = document.getElementById('numero');

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('numero').value = ""; // Definir o valor como vazio
});

numeroInput.addEventListener('keydown', function (event) {
    // Permitir teclas de controle (backspace, delete, setas, etc.)
    if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Tab') {
        return;
    }

    // Permitir apenas dígitos (números)
    if (isNaN(parseInt(event.key))) {
        event.preventDefault();
    }
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    validarNumero();
});

function obterMensagem(n) {
    if (n <= 3) return "O Seu namorado vai ficar bem chateado se ficar sabendo disso!";
    if (n <= 6) return "Mas isso é muito pouco! Seu namorado vai chorar";
    if (n <= 8) return "Mai só isso mo!? ";
    if (n <= 10) return "Eita, mas eu te amo mais!";
    if (n <= 100) return "Ta melhorando! Mas eu ainda te amo mais";
    if (n <= 500) return "Caraca! Muita coisa, só não mais que meu amor por você!";
    if (n <= 1000) return "Tudo isso mo? Mas ta muuuito longe do quanto eu te amo!";
    if (n <= 3000) return "Ebaaa, me ama bastantão, só que eu amo mais 😀";
    return "Uma bela tentativa! Mas eu ainda te amo mais ❤";
}

let timeout

function validarNumero() {
    if (timeout) clearTimeout(timeout)
    let inputNumero = document.getElementById("numero")
    let caixaDeMensagem = document.getElementById("mensagem")
    let numero = Number(inputNumero.value);
    let mensagem = obterMensagem(numero)

    caixaDeMensagem.innerHTML = mensagem
    caixaDeMensagem.style.display = "block"

    timeout = setTimeout(() => {
        caixaDeMensagem.style.display = 'none'
    }, 4000)
}