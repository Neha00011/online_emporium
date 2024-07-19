import React from "react";

function Login() {
  return (
    <div className="login">
        <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Login</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
