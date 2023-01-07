import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import TasksPages from "./pages/tasksPages.jsx";
import TaskForm from "./pages/TaskForm.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";

export const taskContext = createContext();

const App = () => {
  const [showTasks, setShowTasks] = useState([]);

  return (
    <taskContext.Provider value={(showTasks, setShowTasks)}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<TasksPages />}></Route>
          <Route path="/new" element={<TaskForm />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </taskContext.Provider>
  );
};

export default App;
