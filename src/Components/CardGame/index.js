import "./style.css";

function CardGame(icon = "LOGOS", alt = "Minha Logo") {
  return `
    
      <article class = "card-game" >
    <img src = "./images/${icon}.svg" alt = "Minha Logo">  

    </article>

    `;
}

export default CardGame;
