function modo(){
    let centralE = document.querySelector(".central");
    centralE.classList.toggle("cor");
    let logo = document.getElementById("imglogo");
    let central = document.getElementById("fcentral");
    let fundo= document.getElementsByTagName("body")[0];

    if (centralE.classList.contains("cor")) {
        // Quando a classe "cor" está presente
        logo.src = "./4.png";
        central.src = "./1.png";
        fundo.style.backgroundImage = "url('./fundo branco.png')";
    } else {
        // Quando a classe "cor" está ausente
        logo.src = "./3.png";
        central.src = "./2.png";
        fundo.style.backgroundImage = "url('./fundo preto.png')";
    }

    let bot = document.getElementsByClassName("button");
        bot.classList.toggle("escuro");
}
