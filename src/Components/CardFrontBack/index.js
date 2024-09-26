import CardGame from "../CardGame";

function CardFrontBack() {
  return /*html*/ `

<article class ="card-sides"> 

    ${CardGame("LOGOS")}
    ${CardGame("LogoHtml5", "Logo do Html")}

</article>


`;
}

export default CardFrontBack;
