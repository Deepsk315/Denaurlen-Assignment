import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import { useSelector, useDispatch } from "react-redux";
import "../Login/Login.css";
import { register } from "../../actions/userAction";
//import "../../App.css";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, username));
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
                  Enter the credentials for Registration
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
                  Have a account? click here <Link to="/login">Login</Link>
                </p>
                <button
                  className="form-submit-button "
                  //   onClick={this.handleSubmit}
                >
                  {" "}
                  Register
                </button>
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

export default Register;
