import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardHtml from "./src/Components/CardHtml";
import Boardgame from "./src/objects/BoardGame";

const $root = document.querySelector("#root");
const $htmlBoardGame = Boardgame(6);
const $htmlcardHtml = CardHtml();

$root.insertAdjacentHTML("afterbegin", $htmlBoardGame);
//$root.insertAdjacentHTML("afterbegin", $htmlcardHtml);
