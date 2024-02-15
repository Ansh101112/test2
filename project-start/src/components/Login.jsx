import React, { useState } from 'react';
import styles from './Login.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { name, password }); // Log the username and password before sending
    axios.post('http://localhost:3001/login', { name, password })
      .then(result => {
        console.log(result);
        if (result) {
          // Redirect or perform some action upon successful login
          console.log("Login successful");
          navigate('/')
        } else {
          console.log("Login failed: " + result.data);
          navigate('/')
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.main}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
}

export default Login;
