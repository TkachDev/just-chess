import React from "react";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import MainPage from "/imports/ui/pages/MainPage";
import TasksPage from "/imports/ui/pages/TasksPage";
import {
  MAIN_PAGE_URL,
  TASKS_PAGE_URL,
} from "/imports/helpers/constants/links";

const App = () => (
  <>
    <CssBaseline />
    <Routes>
      <Route path={MAIN_PAGE_URL} element={<MainPage />} />
      <Route path={TASKS_PAGE_URL} element={<TasksPage />} />
    </Routes>
  </>
);
export default App;
