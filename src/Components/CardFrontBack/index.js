import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack(icon, iconAlt) {
  //window é uma variavel global,
  //quando para especificar você precisa passar uma classe
  //no exemplowindow.CardFrontBack = {};

  window.CardFrontBack = {};
  window.CardFrontBack.HandleClick = (event) => {
    const $origin = event.target;
    const $CardFrontBack = $origin.closest(".card-sides");

    // A função .toggle faz todo esse trabalho do if-else para
    // verificar se existe uma classe dentro do elemento
    // if ($CardFrontBack.classList.contains("-active")) {
    //   $CardFrontBack.classList.remove("-active");
    // } else {
    //   $CardFrontBack.classList.add("-active");
    // }
    $CardFrontBack.classList.toggle("-active");
  };

  return /*html*/ `

<article class ="card-sides" onClick = "CardFrontBack.HandleClick(event)"> 
<div class = "card -front">
    ${CardGame()}
    </div>
<div class = "card -back">
    ${CardGame(icon, iconAlt)} 
    </div>

</article>


`;
}

export default CardFrontBack;
