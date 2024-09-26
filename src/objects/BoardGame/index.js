import "./style.css";
import CardFrontBack from "../../Components/CardFrontBack";

function Boardgame(amountCards) {
  const $htmlCardFrontBack = CardFrontBack();
  const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

  return /*html*/ `
  <section class = "board-game">
  ${$htmlContent}
    </section>
  
  `;
}

export default Boardgame;
