import React, { Component } from "react";
import { Link } from "@reach/router";
import logo from "../logo.svg";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link className="App-link" to="/flash">
              Flash
            </Link>
          </header>
        </div>
      </div>
    );
  }
}

export default Home;
