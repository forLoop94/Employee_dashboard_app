import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(formData)).then(() => {
      navigate('/')
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <form className="flex gap-5 flex-col" onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="input"
          type="password"
          placeholder="Enter password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="flex justify-center">
          <button className="btn btn-primary w-1/3" type="submit">
            Log in
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
