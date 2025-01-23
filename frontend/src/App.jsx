import { useState } from "react";
import "./App.css";
import SignUp from "./Pages/SignUp";
import axios from "axios";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [user, setUser] = useState({});
  const [success, setSucess] = useState(false);
  const [accessToken, setAccessToken] = useState();

  const registerUser = (user) => {
    axios
      .post("http://localhost:3000/api/v1/users/register", user)
      .then((res) => {
        if (res.data.status == "success") {
          setSucess(true);
        }
      })
      .catch((err) => console.error(err));
  };

  const loginUser = (user) => {
    axios
      .post("http://localhost:3000/api/v1/users/login", user)
      .then((res) => {
        if (res.status == 201) {
          setUser(res.data?.data);
          setAccessToken(res.data?.accessToken);
          localStorage.setItem("loggedInUser", JSON.stringify(res.data?.data));
        }
      })
      .catch((err) => console.error(err));
  };

  if (success) {
    setTimeout(() => {
      setSucess(false);
    }, 3000);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<SignUp registerUser={registerUser} success={success} />}
        />
        <Route
          path="/signup"
          element={<SignUp registerUser={registerUser} success={success} />}
        />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
