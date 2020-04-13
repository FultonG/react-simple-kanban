import React from "react";
import Card from "../Card/Card";
import "./styles.css";
const CardColumn = (props) => {
  const handleDrop = (e) => {
    let id = parseInt(e.dataTransfer.getData("id"));
    props.dispatch({type: 'move', payload: {next: props.status, id}})
  }
  return (
    <div className="column" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
      <h2>{props.title}</h2>
      {props.tasks.map((task) => (
        <Card key={task.id} {...task}/>
      ))}
    </div>
  );
};

export default CardColumn;
