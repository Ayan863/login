import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";

import "./../../../assets/css/main.css";
const Login = () => {
  return (
    <section className="card-Section">
      <div className="card">
        <h2>Login</h2>
        <div className="type">
          <div className="user-name">
            <span>Username</span>
            <div className="input anime">
              <CiUser />
              <input type="text" placeholder="Type your username" />
              {/* a */}
            </div>
          </div>
          <div className="password">
            <span>Password</span>
            <div className="input">
              <MdLockOutline />
              <input type="password" placeholder="Type your password" />
            </div>
          </div>
        </div>
        <div className="button">
          <div className="forgot">
            <a href="#">Forgot password?</a>
            <button>LOGIN</button>
          </div>
        </div>
        <div className="about">
        <div className="social-media">
          <a href="#">Or Sign Up Using</a>
          <div className="icons">
            <div className="facebook social">
              <FaFacebookF className="fb media" />
            </div>
            <div className="twitter social">
              <FaTwitter className="tw media" />
            </div>
            <div className="google social">
              <FaGoogle className="g media" />
            </div>
          </div>
        </div>
        <div className="sign">
          <a href="#">Or Sign Up Using</a>
          <a href="#">Sign Up</a>

        </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
