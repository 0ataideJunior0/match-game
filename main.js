import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

//import CardHtml from "./src/Components/CardHtml";
import Boardgame from "./src/objects/BoardGame";
import PlayerName from "./src/Components/PlayerName";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
  "afterbegin",
  `
    ${PlayerName("Player1")}
    ${PlayerName("Player2")}
    ${Boardgame(6)}

    `
);
