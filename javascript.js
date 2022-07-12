let botao = document.getElementsByClassName("button2-questions")
let menu = document.getElementsByClassName("p2-questions")
let imagem = document.getElementsByClassName("polygon")

function test(){

    if (menu.style.display == "block"){
        menu.style.display = "none"
        imagem = "imagem-pergunta"
    } else {
        menu.style.display = "block"
        imagem.id = "imagem-pergunta-girar"
    }
}
botao.addEventListener("click", test)