import React from "react";

const TaskItem = ({ task }) => (
  <div className="p-4 border border-gray-300 rounded-md shadow-md mb-4">
    <h3 className="font-semibold">{task.title}</h3>
    <p>{task.description}</p>
  </div>
);

export default TaskItem;
