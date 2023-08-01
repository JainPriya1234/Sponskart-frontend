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
        await axios.post('https://sponskart-hkgd.onrender.com/register', formData)
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
        <h1>Sponskart</h1>
        <h3 style={{ textAlign: "center" }}>It's Free to Sign Up and Get Started.</h3>
        <p style={{ textAlign: "center" , color:"#676767"  }}>
        Already have an account?{" "}
        <Link to="/signin">Sign in</Link>
      </p>      
        <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="tel" name="phonenumber" placeholder="Phone Number" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <p>I want to start as:</p><label>
        <input type="radio" name="startAs" value="a" onChange={handleChange} required /> Brand 
      </label>
      <label>
        <input type="radio" name="startAs" value="b" onChange={handleChange} required /> Influencer
      </label>
        <label>
        <input type="radio" name="startAs" value="c" onChange={handleChange} required /> Event Organiser
      </label>
        <button type="submit">Register</button>
      
      </form>
    );
  };

  export default Register;
