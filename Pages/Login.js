import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../context/appContext';

const Login = () => {
  const { login, user } = useGlobalContext();

  const handleGoogleAuth = () => {
    window.open('http://localhost:3001/auth/google', '_self');
  };

  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = values;
    login({ username, password });

    setValues({
      username: '',
      password: '',
    });
  };

  return (
    <div
      className="login-area"
      style={{ backgroundImage: 'url(assets/img/login-bg.jpg)' }}
    >
      {user && <Navigate to="/dashboard" />}
      <div className="login-main-blk">
        <div
          className="login-content-blk"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <Link to={'/'}>
            <h2>
              late<span>night</span>anime
            </h2>
          </Link>
          <h5>Log in to your account</h5>
          <button onClick={handleGoogleAuth} className="google-wrapper">
            <i className="mr-2 fab fa-google"></i>Continue with google
          </button>
          <p>Or use your email to enter</p>
        </div>
        <div
          className="login-form-blk"
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <form onSubmit={onSubmit}>
            <div className="login-form">
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                value={values.username}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
              />
              <button type="submit">Sign in</button>
              <Link to="/register">
                <button className="login-btn" type="button">
                  Register
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
