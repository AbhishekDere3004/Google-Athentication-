// Login.js
import React from 'react';
import './login.css'; // Import the CSS file for styling

const Login = () => {
    const loginwithgoogle =()=>{
        window.open("http://localhost:1002/auth/google/callback", "_self")
    }
  return (
    <div className="login-container">
      <h1>Login</h1>
      <div>
        <form>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <button>Login</button>
          <p>Not Registered? <a href="#">Create an Account</a></p>
        </form>
        <button href='/dashboard' className='login-with-google-btn' onClick={loginwithgoogle}>
         <img src='/google.png' style={{width:"70px",marginLeft:"10px "}}/> <span className='text'>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
