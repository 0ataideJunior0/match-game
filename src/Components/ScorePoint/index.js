import "./style.css";
function ScorePoint(points = 0) {
  return /*html*/ `
    <ol class="score-point" data-points="${points}">
    <li class="pointer">um</li>
    <li class="pointer">dois</li>
    <li class="pointer">tres</li>
    </ol>
`;
}
export default ScorePoint;
