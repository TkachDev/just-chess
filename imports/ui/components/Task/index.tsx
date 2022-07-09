import React from "react";
import { ITask } from "/imports/api/TasksCollection";

export type TaskPropOnCheckboxClick = (id: string, isChecked?: boolean) => void;
export type TaskPropOnDeleteClick = (id: string) => void;

export interface TaskProps {
  task: ITask;
  onCheckboxClick?: TaskPropOnCheckboxClick;
  onDeleteClick?: TaskPropOnDeleteClick;
}

const Task = ({ task, onCheckboxClick, onDeleteClick }: TaskProps) => {
  const handleChangeCheckbox = () => {
    if (onCheckboxClick) onCheckboxClick(task._id, task.isChecked);
  };

  const handleDeleteClick = () => {
    if (onDeleteClick) onDeleteClick(task._id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={!!task.isChecked}
        onChange={handleChangeCheckbox}
      />
      <span>{task.text}</span>
      <button onClick={handleDeleteClick}>&times;</button>
    </li>
  );
};

export default Task;
