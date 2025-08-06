
function showPassoword(){
    var input_Senha = document.querySelector('#senha')
    var img_eye = document.querySelector('#eye')

    if(input_Senha.getAttribute('type') === 'password'){
        input_Senha.setAttribute('type','text')
        img_eye.setAttribute('src','./images/troll-face-poster.png')
    }else{
        input_Senha.setAttribute('type','password')
        img_eye.setAttribute('src','./images/trol da aura.jfif')
    }
}