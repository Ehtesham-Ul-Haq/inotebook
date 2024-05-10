import React, { useState } from 'react'
import '../css/LogSign.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({email:"", password:""});
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email:credentials.email, password:credentials.password})
          });
          const json = await response.json();
          console.log(json);
          if (json.success) {
            // save the auth token redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Login Successfully", "Success")
            navigate("/");
          }      
          else{
            props.showAlert("Check Your Email or Password", "Error")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='container'>
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby='emailHelp' required autoComplete="email"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} required autoComplete="current-password" />
                    </div>
                    <button className='login-button' type="submit">Login</button>
                </form>
                <p className="signup-link">Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>    
        </div>
    )
}

export default Login
