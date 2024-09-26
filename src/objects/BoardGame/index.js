import "./style.css";
import CardGame from "../../Components/CardGame";

function Boardgame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlContent = $htmlCardGame.repeat(amountCards);

  return `
  <section class = "board-game">
  ${$htmlContent}
    </section>
  
  `;
}

export default Boardgame;
