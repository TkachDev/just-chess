import TasksList from "/imports/ui/containers/TasksList";
import { Link } from "react-router-dom";
import React from "react"

const Tasks = () => {
  return (
    <div>
      <Link to="/">To main</Link>
      <TasksList />
    </div>
  );
};

export default Tasks;
