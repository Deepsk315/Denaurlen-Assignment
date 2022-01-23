import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userAction";
import Home from "../Home/Home";
import "../Login/Login.css";
import "../../App.css";

const Login = ({ history }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(name, username));
  };

  return (
    <div className="container-fluid App-full-body">
      <div className="row h-100">
        <div className="col-4 "></div>
        <div className="col-4">
          <div className="row h-25"></div>
          <div className="row h-50">
            <div className="col">
              <div className="row">
                <p className="Title pt-5 pl-3">
                  Enter the credentials for Login
                </p>
              </div>
              <form onSubmit={submitHandler}>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <p>
                  New here ? <Link to="/register">Register</Link>
                </p>
                <button className="form-submit-button "> Login</button>
              </form>
            </div>
          </div>
          <div className="row h-25"></div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Login;
