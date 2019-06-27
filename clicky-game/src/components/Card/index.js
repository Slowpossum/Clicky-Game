import React from 'react';
import "./styles.css";

function Card(props) {
  return (
      <div className="card" onClick={props.onClick}>
          <img src={props.image} alt={props.alt}></img>
      </div>
  );
}

export default Card;
