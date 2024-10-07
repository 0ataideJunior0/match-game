import PlayerName from "../../Components/PlayerName";
import ScorePoint from "../../Components/ScorePoint";
import SelectArrow from "../../Components/SelectArrow";
import Versus from "../../Components/Versus";
import "../ScoreBoard/style.css";

function ScoreBoard() {
  return /*html*/ `
   <header class = "score-board">
   ${SelectArrow()}
   </header> 
   <article class= "body-ScoreBoard">
   ${PlayerName("Player1")}
   ${ScorePoint()}
   ${Versus("VS")}
   ${ScorePoint()}
   ${PlayerName("Player2")}
   </article>
    `;
}
export default ScoreBoard;
