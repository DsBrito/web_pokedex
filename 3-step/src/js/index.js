
alert("Helou guys! Welcome to my first project using html, css and javascript");


/**
 * Pegar no JS o elemento HTML correstpondente ao botão de troca de tema
 */

const lightBotton = document.getElementById("change-light");

/**
 * Pegar no JS o elemento HTML correspondente ao body
 */

const body = document.querySelector("body");
console.log(body);

/**
 * Identificar o clique do usuário no botão de troca de luz e trocar a imagem
 *
*/
const changeImg = document.querySelector(".botton-image");
lightBotton.addEventListener("click", () => {

    const mode = body.classList.contains("black-mode");
    body.classList.toggle("black-mode"); /* alternar = toggle */
    if(mode){
        console.log("black mode off")
        console.log("click-light-button");
        changeImg.setAttribute("src","./src/images/sun.png");

    }
    else{
        console.log("black mode on")
        console.log("click-light-button");
        changeImg.setAttribute("src","./src/images/moon.png");
    }


})

