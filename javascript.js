let botao = document.getElementById("button-questions");
    let menu = document.getElementById("div-questions");
    let imagem = document.getElementById("polygon");

    function event1(){

        if (menu.style.display == "block"){
            menu.style.display = "none"
            imagem.id = "polygon"
        } else {
            menu.style.display = "block"
            imagem.id = "polygon-girar"
        }
    }
    botao.addEventListener("click", event1)


    let botao2 = document.getElementById("button-questions2");
    let menu2 = document.getElementById("div-questions2");
    let imagem2 = document.getElementById("polygon2");

    function event2(){

        if(menu2.style.display == "block"){
            menu2.style.display = "none"
            imagem2.id = "polygon2"
        } else{
            menu2.style.display = "block"
            imagem2.id = "polygon-girar"
        }
}
    botao2.addEventListener("click", event2)


    let botao3 = document.getElementById("button-questions3")
    let menu3 = document.getElementById("div-questions3")
    let imagem3 = document.getElementById("polygon3")

    function event3(){

        if(menu3.style.display == "block"){
            menu3.style.display = "none"
            imagem3.id = "polygon3"
        } else{
            menu3.style.display = "block"
            imagem3.id = "polygon-girar"
        }
    }
    botao3.addEventListener("click", event3)

    // MENU INICIAL

    let botaoNav = document.getElementById("img-menu")
    let abaMenu = document.getElementById("aba-menu")
    let img = document.getElementById("aba-img")

    function test(){

        if(abaMenu.style.display == "block"){
            abaMenu.style.display = "none"
            img.style.display = "none"
        } else{
            abaMenu.style.display = "block"
            img.style.display = "block"
        }
    }
    botaoNav.addEventListener("click", test)
    img.addEventListener("click", test)