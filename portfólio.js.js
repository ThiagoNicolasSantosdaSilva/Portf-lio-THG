function mostrarSenha(){
var inputPass = document.getElementById('senha')
var btnShowPass = document.getElementById('btn-senha')

if(inputPass.Type ==='password'){
    inputPass.setAttribute('type','text')
    btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fil')
}
else{
    inputPass.setAttribute('type','password')
    btnShowPass.classList.replace('bi-eye-slash-fil','bi-eye-fill')
}
}