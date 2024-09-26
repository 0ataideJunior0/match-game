import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

//import CardHtml from "./src/Components/CardHtml";
import Boardgame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "afterbegin",
  `
    ${ScoreBoard()}
    ${Boardgame(6)}

    `
);
