import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phonenumber: "",
    email: "",
    password: "",
});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/register', formData)
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
        window.alert(err);
        console.log(err);
      })
    } 
    catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />
      <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
      <input type="tel" name="phonenumber" placeholder="Phone Number" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Register</button>
      <Link to="/signin">Already have an account? Sign in</Link>
    
    </form>
  );
};

export default Register;
