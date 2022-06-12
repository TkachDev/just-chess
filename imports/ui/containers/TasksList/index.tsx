import Task from "/imports/ui/components/Task";
import React from "react";

const tasks = [
  { _id: 1, text: "First Task" },
  { _id: 2, text: "Second Task" },
  { _id: 3, text: "Third Task" },
];

const TasksList = () => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </ul>
  );
};

export default TasksList;
