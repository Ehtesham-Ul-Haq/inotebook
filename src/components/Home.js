import React from "react";
import Notes from "./Notes";
const Home = () => {
  return (
    <div>
      <div className="container my-3">
      <h2>Add Note</h2>
      <form>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" autoComplete="username" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" autoComplete="current-password" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
      </div>
      <Notes />
    </div>
  );
};

export default Home;
