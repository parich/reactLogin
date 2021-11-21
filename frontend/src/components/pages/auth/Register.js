import React, { useState } from "react";
import { register } from "../../functions/auth";

export const Register = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
    password1: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  //console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.password !== value.password1) {
      alert("Password not match");
    } else {
      //ส่งค่า
      register(value)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response.data);
          alert(err.response.data);
        });
    }
  };

  return (
    <div>
      <h1>register page</h1>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input type="text" name="username" onChange={handleChange} />
        <label>password</label>
        <input type="text" name="password" onChange={handleChange} />
        <label>confirm password</label>
        <input type="text" name="password1" onChange={handleChange} />

        <button disabled={value.password.length < 8}>Submit</button>
      </form>
    </div>
  );
};

export default Register;
