import React, { useState } from "react";
import { login } from "../../functions/auth";

const Login = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(value)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
        alert(err.response.data);
      });
  };

  return (
    <div>
      <h1>register page</h1>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>password</label>
        <input type="text" name="password" onChange={handleChange} />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
