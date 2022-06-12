import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "/imports/ui/pages/Main";
import Tasks from "/imports/ui/pages/Tasks";

const App = () => (
  <>
    <CssBaseline />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  </>
);
export default App;
