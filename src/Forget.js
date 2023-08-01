import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './App.css';

const Forget = () => {
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
          await axios.post('https://sponskart-hkgd.onrender.com/forget', formData)
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
          <h2>FORGET PASSWORD</h2>
          <p style={{textAlign: "center"}}>If you have an account?{" "}
          <Link to="/signin" style={{ color: "voilet" }}>Sign in</Link>
          </p>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <button type="submit">Get Password</button>
        </form>
      );
};

export default Forget;