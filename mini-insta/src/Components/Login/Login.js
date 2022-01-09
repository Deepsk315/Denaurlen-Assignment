import React, { Component } from "react";
import { Route } from 'react-router-dom'
import Home from '../Home/Home'
import "../Login/Login.css";
import "../../App.css";



export class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {};
    }
  handleSubmit = (e) => {
      e.preventDefault()
    console.log("Submit clicked")
    window.location.pathname="/home"
  }

  render() {
    return (
      <div className="container-fluid App-full-body">
        <div className="row h-100">
          <div className="col-4 "></div>
          <div className="col-4">
            <div className="row h-25"></div>
            <div className="row h-50">
              <div className="col">
                <div className="row">
                  <p className="Title pt-5 pl-3">Enter the credentials</p>
                </div>
                <form >
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your username"
                    />
                  </div>
                <button className="form-submit-button " onClick={this.handleSubmit}> Submit</button>
                </form>
              </div>
            </div>
            <div className="row h-25"></div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}

export default Login;
