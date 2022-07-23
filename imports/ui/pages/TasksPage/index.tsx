import TasksList from "/imports/ui/containers/TasksList";
import React from "react";
import Navigation from "/imports/ui/containers/Navigation";
import TaskForm from "/imports/ui/components/TaskForm";
import Page from "/imports/ui/components/pageLayout/Page";
import Header from "/imports/ui/components/pageLayout/Header";
import Main from "/imports/ui/components/pageLayout/Main";

const TasksPage = () => {
  return (
    <Page>
      <Header>
        <Navigation />
      </Header>

      <Main>
        <TaskForm />
        <TasksList />
      </Main>
    </Page>
  );
};

export default TasksPage;
