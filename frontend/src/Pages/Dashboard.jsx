// src/Dashboard.js
import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import TasksBreakdown from "../Components/TasksBreakdown";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const [tasks] = useState([
    { id: 1, title: "Task 1", description: "This is the first task" },
    { id: 2, title: "Task 2", description: "This is the second task" },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar user={user} onLogout={handleLogout} />
      <TasksBreakdown tasks={tasks} />
    </div>
  );
};

export default Dashboard;
