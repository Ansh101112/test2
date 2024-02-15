import React from "react";
import styles from "./Signup.module.css";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const handlesubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className={styles.main}>
      <form className={styles.signupForm} onSubmit={handlesubmit}>
        <h2>Sign Up</h2>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={(e)=>setname(e.target.value)}/>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e)=>setpassword(e.target.value)}/>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
