import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.loginbox}>
      <form>
        <div className="form-group mt-4 ">
          <label htmlFor="Email">Email</label>
          <input type="email" className="form-control " />
        </div>
        <div className="form-group mt-4">
          <label htmlFor="Password">Password</label>
          <input type="password" className="form-control " />
        </div>
        <div>
          <div className="form-group mt-4">
            <button className="btn btn-success form-control ">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
