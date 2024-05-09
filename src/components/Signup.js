import React, { useState } from 'react'
import '../css/LogSign.css'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

  const [credentials, setCredentials] = useState({name:"", email:"", password:""});
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
      e.preventDefault();
      const response = await fetch('http://localhost:5000/api/auth/createuser', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
          // save the auth token redirect
          localStorage.setItem('token', json.authtoken);
          navigate("/");
        }      
        else{
          alert("user already exists");
        }
  }

  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }


  return (
    <div className='container'>
    <div className="login-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={onChange} required autoComplete="name"/>
            </div>

            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={onChange} aria-describedby='emailHelp' required autoComplete="email"/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={onChange} minLength={5} required autoComplete="current-password" />
            </div>
            <button className='signup-button' type="submit">Signup</button>
        </form>
        <p className="login-link">Already have an Account? <Link to="/login">Login</Link></p>
    </div>    
</div>
)
}

export default Signup
