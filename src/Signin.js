import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://sponskart-hkgd.onrender.com/signin', formData)
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
        window.alert(err);
        console.log(err);
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sponskart</h1>
        <h3 style={{ textAlign: "center" }}>It's Free to Sign Up and Get Started.</h3>
        <p style={{ textAlign: "center" , color:"#676767"  }}>
        Don’t have an account?{" "}
        <Link to="/">Register</Link>
      </p>  
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Signin;
