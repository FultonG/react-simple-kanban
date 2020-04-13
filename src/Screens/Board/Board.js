import React, { useReducer } from "react";
import CardColumn from "../../Components/CardColumn/CardColumn";
import "./styles.css";
import reducer from './reducer';
const initialTasks = [
  {
    id: 1,
    title: "Implement Drag and Drop",
    description: "We should be able to drag and drop the cards between columns",
    status: 'todo'
  },

  {
    id: 2,
    title: "Create Board",
    description: "Create the initial board component in react",
    status: 'done'
  },
];
const Board = () => {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);
  const todo = tasks.filter(task => task.status === 'todo');
  const inProgress = tasks.filter(task => task.status === 'inProgress');
  const testing = tasks.filter(task => task.status === 'testing');
  const done = tasks.filter(task => task.status === 'done');
  return (
    <div className="board-container">
      <CardColumn title="To Do" tasks={todo} status="todo" dispatch={dispatch}/>
      <CardColumn title="In Progress" tasks={inProgress} status="inProgress" dispatch={dispatch}/>
      <CardColumn title="Testing" tasks={testing} status="testing" dispatch={dispatch}/>
      <CardColumn title="Done" tasks={done} status="done" dispatch={dispatch}/>
    </div>
  );
};

export default Board;
