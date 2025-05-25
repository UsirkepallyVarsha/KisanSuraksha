import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

const handleSubmit = (e) => {
  e.preventDefault();

 
  if (email === "test@example.com" && password === "password123") {
    console.log('Login successful!');
    //navigate('/home');
  } else {
    console.error('Invalid credentials');
    alert('Login failed! Please check your email and password.');
  }
};


  return (
    <div className="login-container">
      <h1 className="login-header">Welcome to Kisan Suraksha</h1>
      <p className="login-subheader">Please login to continue</p>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
