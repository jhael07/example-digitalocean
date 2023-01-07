import React, { useState, useEffect } from "react";
import { getTask } from "../api/task.api";
import DisplayTasks from "../components/DisplayTasks";

export const loadTask = async (update) => {
  const result = await getTask();
  update(result.data);
};

const TasksPages = () => {
  const [showTasks, setShowTasks] = useState([]);

  useEffect(() => {
    loadTask(setShowTasks);
  }, []);

  return (
    <div className="container">
      TasksPages
      <DisplayTasks showTasks={showTasks} update={setShowTasks} />
    </div>
  );
};

export default TasksPages;
