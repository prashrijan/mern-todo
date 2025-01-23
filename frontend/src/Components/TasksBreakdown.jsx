// src/components/TasksBreakdown.js
import React from "react";
import TaskItem from "./TaskItem";

const TasksBreakdown = ({ tasks }) => {
  return (
    <div className="w-3/4 bg-white p-6 overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-6">Your Tasks</h2>
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <p className="text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default TasksBreakdown;