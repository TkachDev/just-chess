import React from "react";

const Task = ({ task }: { task: { text: string } }) => {
  return <li>{task.text}</li>;
};

export default Task;
