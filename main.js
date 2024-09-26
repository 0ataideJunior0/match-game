import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

//import CardHtml from "./src/Components/CardHtml";
import ScoreBoard from "./src/objects/ScoreBoard";
import BoardGame from "./src/objects/BoardGame/";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "afterbegin",
  `
    ${ScoreBoard()}
    ${BoardGame(6)}

    `
);
