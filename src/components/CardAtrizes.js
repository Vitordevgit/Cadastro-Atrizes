import "../Styles/CardAtrizes.css";

function CardAtrizes({ nome, idade, actionButton }) {
  return (
    <>
      <div className="cardAtrizesContainer">
        <h3>{nome}</h3>
        {`${idade} anos.`}
        <button className="cardAtrizesButton" onClick={actionButton}>
          X
        </button>
      </div>
    </>
  );
}
export default CardAtrizes;
