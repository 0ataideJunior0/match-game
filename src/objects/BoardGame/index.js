import CardFrontBack from "../../Components/CardFrontBack";
import cards from "./cards";
import "./style.css";

function Boardgame(amountCards) {

  const htmlCardList = cards.map( (card) => CardFrontBack(card.icon, card.iconAlt ) );
  const $htmlCardList = htmlCardList.join("");

  return /*html*/ `
  <section class = "board-game">
  ${$htmlCardList}
    </section>
  
  `;
}

export default Boardgame;
