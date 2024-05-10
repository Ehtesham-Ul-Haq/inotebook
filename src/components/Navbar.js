import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = (props) => {

  // Using useLocation hook to access the current location
  const location = useLocation();
  let navigate = useNavigate();
  const handleLogout =()=> {
    localStorage.removeItem('token');
    navigate("/login");
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">INotebook</ Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</ Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</ Link>
            </li>
          </ul>
          <div className={`form-check text-${props.mode==='light'?'dark':'light'}`}>
              <i className="far fa-moon mx-1" style={{ fontSize: "larger" }} onClick={props.toggleMode} role="switch" aria-checked={true}></i>
          </div>
          {!localStorage.getItem('token')?<form className="d-flex mx-3">
              <Link className="button login mx-1" role="button" to="/login">Login</Link>
              <Link className="button signup mx-1" role="button" to="/signup">Signup</Link>
          </form>: <button onClick={handleLogout} className="button logout mx-1">Logout</button>}
        </div>
      </div>
    </nav>);
};

export default Navbar;
