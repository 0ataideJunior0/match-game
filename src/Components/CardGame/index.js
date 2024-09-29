import "./style.css";

function CardGame(icon = "LOGOS", alt = "Minha Logo") {
  return /*html*/ ` 
    
      <article class = "card-game" >
    <img src = "./images/${icon}.svg" alt = "Minha Logo">  

    </article>

    `;
}

export default CardGame;
