import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  return /*html*/ `

<article class ="card-sides"> 
<div class = "card -front">
    ${CardGame("LOGOS")}
    </div>
<div class = "card -back">
    ${CardGame("LogoHtml5", "Logo do Html")}
    </div>

</article>


`;
}

export default CardFrontBack;
