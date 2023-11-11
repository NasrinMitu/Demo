import "./Card.css";
function Card(props){
  return(
    <div id="cardContainer">
      <div id="quote">{props.quote}</div>
      <div id="author">....{props.author}</div>
    </div>
  )
}

export default Card;