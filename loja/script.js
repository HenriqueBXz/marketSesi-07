let produtos

window.onload = function () {
    var storedUser = localStorage.getItem("usuario")
    var user = JSON.parse(storedUser)

    var dataEntrada = new Date(user.dataEntrada);
    var dataFormatada = dataEntrada.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })

    document.getElementById("perfil").innerText = dataFormatada
    document.getElementById("user").innerText = user.nome
    document.getElementById("idPerfil").innerText = user.id
};

document.addEventListener("DOMContentLoaded", function () {
    //busca dos produtos e guardar os dados na variavel global 
    fetch('../dados/mock.jason')
        .then((response) => response.jason())
        .then((data) => {
            produtos = data
            console.log(data)



        }).catch((error) => console.error('Error ao carregar dados', error))
});