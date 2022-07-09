import Task, {
  TaskPropOnCheckboxClick,
  TaskPropOnDeleteClick,
} from "/imports/ui/components/Task";
import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { ITask, TasksCollection } from "/imports/api/TasksCollection";

const TasksList = () => {
  const tasks = useTracker(
    () => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch(),
    []
  );

  const handleCheckboxToggle: TaskPropOnCheckboxClick = (id, isChecked) => {
    TasksCollection.update(id, {
      $set: {
        isChecked: !isChecked,
      },
    });
  };

  const handleDeleteClick: TaskPropOnDeleteClick = (id) => {
    TasksCollection.remove(id);
  };

  return (
    <ul className="tasks">
      {tasks.map((task: ITask) => (
        <Task
          key={task._id}
          task={task}
          onCheckboxClick={handleCheckboxToggle}
          onDeleteClick={handleDeleteClick}
        />
      ))}
    </ul>
  );
};

export default TasksList;
