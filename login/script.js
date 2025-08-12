
function login(){
    var nome = $('#nome').val()
    var senha = $ ('#senha').val()

    if(nome && senha && nome === "aura" && senha === "egora"){

        const user = {
            nome:nome,
            dataEntrada: new Date(),
            id: Math.floor(Math.random() *100000)
        };

        localStorage.setItem('usuario', JSON.stringify(user))
        window.location.href = '../loja/index.html'
    }else{
        document.getElementById('error-modal').style.display = 'flex'
        document.getElementById('nome').style.bodrBottom = '3px solid black'
        document.getElementById('senha').style.boderBottom = '3px solid black'


    }

}

function fecharError(){

    document.getElementById('error-modal').style.display = 'none'
    document.getElementById('nome').style.bodrBottom = '2px solid red'
    document.getElementById('senha').style.boderBottom = '2px solid red'
}

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