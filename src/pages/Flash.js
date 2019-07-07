import React, { Component } from "react";
import { Link } from "@reach/router";
class Flash extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <p>Flash</p>
            <Link className="App-link" to="/">
              Home
            </Link>
          </header>
        </div>
      </div>
    );
  }
}

export default Flash;
