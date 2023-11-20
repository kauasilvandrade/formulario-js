
// ENTRADAS DE USUÁRIO
let inputNome = document.querySelector('#nome');
let inputEmail = document.querySelector('#email');
let inputAssunto = document.querySelector('#assunto');
let inputMensagem = document.querySelector('#areaMensagem');
let erro = document.querySelectorAll('.mensagem__erro');

function validarForm() {

    if (inputNome.value.trim() == "" || inputNome.value.length < 4) {
        erro[0].innerText = "Digite o seu nome com mais de 3 caracteres! "
    } else {
        erro[0].innerText = " "
    }

    if (inputEmail.value.trim() == "" || inputEmail.value.length < 4) {
        erro[1].innerText = "Digite o seu email com mais de 5 caracteres! "
    } else {
        erro[1].innerText = " "
    }

    if (inputAssunto.value.trim() == "") {
        erro[2].innerText = "Digite um assunto! "
    } else {
        erro[2].innerText = " "
    }  

    if (inputMensagem.value.trim() == "" || inputMensagem.value.length < 10) {
        erro[3].innerText = "Digite uma mensagem com mais de 10 caracteres! "
    } else {
        erro[3].innerText = " "
    }    
    
}