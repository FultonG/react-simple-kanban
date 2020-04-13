import React from 'react';
import "./styles.css";

const Card = (props) => {
  const handleOnDragStart = (e) => {
    console.log("starting drag")
  }
  return (
    <div className="card" draggable onDragStart={handleOnDragStart}>
      {props.children}
    </div>
  );
}

export default Card;