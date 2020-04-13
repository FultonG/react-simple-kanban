import React from 'react';
import "./styles.css";

const Card = (props) => {
  const handleOnDragStart = (e) => {
    e.dataTransfer.setData("id", props.id);
  }
  return (
    <div className="card" draggable onDragStart={handleOnDragStart}>
      <h4 className="text-center">{props.title}</h4>
      <p className="text-center">{props.description}</p>
    </div>
  );
}

export default Card;