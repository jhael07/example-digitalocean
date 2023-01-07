import React from "react";
import { deleteTaskRequest } from "../api/task.api";
import { loadTask } from "../pages/tasksPages";

const DisplayTasks = ({ showTasks, update }) => {
  console.log(showTasks);

  const handleDelete = async (id) => {
    try {
      await deleteTaskRequest(id);
      loadTask(update);
    } catch (err) {
      console.log(err);
    }
  };
  const displayTasks = showTasks.map((task, i) => (
    <div key={i}>
      <div className="task">
        <p>{task.title}</p>
        <p>
          {task.description.length > 26
            ? task.description.slice(0, 36) + "..."
            : task.description}
        </p>
        <div className="details">
          <span className="check">
            {task.done === 1 ? "done" : "pending..."}
          </span>
          <p>
            {"Created at: " + task.createdAt.slice(0, -5).split("T").join(" ")}
          </p>
        </div>
        <button
          onClick={() => {
            handleDelete(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  ));
  return <div className="task-container">{displayTasks}</div>;
};

export default DisplayTasks;
