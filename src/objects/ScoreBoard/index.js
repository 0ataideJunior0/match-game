import PlayerName from "../../Components/PlayerName";
import ScorePoint from "../../Components/ScorePoint";
import Versus from "../../Components/Versus";
import "../ScoreBoard/style.css";

function ScoreBoard() {
  return /*html*/ `
   <header class = "score-board">
   ${PlayerName("Player1")}
   ${ScorePoint()}
   ${Versus("VS")}
   ${PlayerName("Player2")}
   ${ScorePoint()}
  

   </header> 
    
    `;
}
export default ScoreBoard;
