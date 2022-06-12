import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import MainPage from "/imports/ui/pages/MainPage";
import TasksPage from "/imports/ui/pages/TasksPage";

const App = () => (
  <>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/tasks" element={<TasksPage />} />
    </Routes>
  </>
);
export default App;
