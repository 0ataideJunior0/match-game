import ArrowDown from "../../Components/ArrowDown";
import PlayerName from "../../Components/PlayerName";
import ScorePoint from "../../Components/ScorePoint";
import Versus from "../../Components/Versus";
import "../ScoreBoard/style.css";

function ScoreBoard() {
  return /*html*/ `
   <header class = "score-board">
   ${ArrowDown(2)}
   ${PlayerName("Player1")}
   ${ScorePoint(2)}
   ${Versus("VS")}
   ${ScorePoint()}
   ${PlayerName("Player2")}
   </header> 
    
    `;
}
export default ScoreBoard;
