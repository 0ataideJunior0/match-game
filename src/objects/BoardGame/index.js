import CardFrontBack from "../../Components/CardFrontBack";
import cards from "./cards";
import "./style.css";

function Boardgame(amountCards) {
  window.boardgame = {};
  window.boardgame.handleClick = () =>{
    const $boardGame = document.querySelector(".board-game");
    const $cardActive = $boardGame.querySelectorAll(".card-sides.-active");
    if ($cardActive.length === 2){
    setTimeout(()=> {
      $cardActive.forEach((card) => card.classList.remove("-active"))
      }, 1000);
    }
  }
  const htmlCardList = cards.map( (card) => CardFrontBack(card.icon, card.iconAlt ) );
  const $htmlCardList = htmlCardList.join("");

  return /*html*/ `
  <section class = "board-game" onClick="boardgame.handleClick()">
  ${$htmlCardList}
    </section>
  
  `;
}

export default Boardgame;
