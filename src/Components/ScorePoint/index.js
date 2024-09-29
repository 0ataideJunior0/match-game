import "./style.css";
function ScorePoint(icon = "scoreDefault", alt = "scoreDefault") {
  return /*html*/ `

<div class = "score-point"> 
    <div class = "one" > <img src = "./images/${icon}.svg" alt = "scoreDefault"> </div>
    <div class = "two" > <img src = "./images/${icon}.svg" alt = "scoreDefault"> </div>
    <div class = "three"> <img src = "./images/${icon}.svg" alt = "scoreDefault"> </div>

</div>
  
`;
}
export default ScorePoint;
