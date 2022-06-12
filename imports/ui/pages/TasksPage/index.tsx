import TasksList from "/imports/ui/containers/TasksList";
import React from "react";
import Navigation from "/imports/ui/containers/Navigation";
import TaskForm  from "/imports/ui/components/TaskForm";

const TasksPage = () => {

  return (
    <div>
      <Navigation />
      <TaskForm />
      <TasksList />
    </div>
  );
};

export default TasksPage;
