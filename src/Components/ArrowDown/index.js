import "./style.css"

function ArrowDown(currentPlayer= ""){
  return /*html*/`
    <img  data-currentPlayer="${currentPlayer}"
     class="arrow-down"
     src ="./images/arrowdown.svg"
     alt="imagem do ArrowDown"/>
  `

}
export default ArrowDown