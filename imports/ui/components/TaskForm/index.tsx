import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { TasksCollection } from "/imports/api/TasksCollection";

const TaskForm = () => {
  const [text, setText] = useState("");

  const handleTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (text) {
      TasksCollection.insert({
        text: text.trim(),
        createdAt: new Date(),
      });
      setText("");
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={handleTextChange}
      />
      <button type="submit" disabled={!text}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
