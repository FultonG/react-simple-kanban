import React, { useState } from 'react';
import CardColumn from '../../Components/CardColumn/CardColumn';
import "./styles.css"
const initialTasks = {
  todo: [
    {
      id: 1,
      title: "Implement Drag and Drop",
      description: "We should be able to drag and drop the cards between columns"
    }
  ],
  inProgress: [],
  testing: [],
  done: [
    {
      id: 2,
      title: "Create Board",
      description: "Create the initial board component in react"
    }
  ]
}
const Board = () => {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="board-container">
      <CardColumn title="To Do" tasks={tasks.todo}/>
      <CardColumn title="In Progress" tasks={tasks.inProgress}/>
      <CardColumn title="Testing" tasks={tasks.testing}/>
      <CardColumn title="Done" tasks={tasks.done}/>
    </div>
  );
}

export default Board;