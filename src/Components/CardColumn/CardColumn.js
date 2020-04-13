import React from "react";
import Card from "../Card/Card";
import "./styles.css";
const CardColumn = (props) => {
  return (
    <div className="column">
      <h2>{props.title}</h2>
      {props.tasks.map((task) => (
        <Card key={task.id}>
          <h4 className="text-center">{task.title}</h4>
          <p className="text-center">{task.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default CardColumn;
