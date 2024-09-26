import CardGame from "../../Components/CardGame";

function Boardgame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

  return $htmlBoardGame;
}

export default Boardgame;
