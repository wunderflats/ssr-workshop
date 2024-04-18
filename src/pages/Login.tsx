import React from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div>
      <h1>Hello Login</h1>
      <Link to="/dashboard">To dashboard</Link>
    </div>
  );
};

export default Login;
