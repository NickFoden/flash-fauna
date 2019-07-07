import React, { Component } from "react";
import { Link } from "@reach/router";
class Flash extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <p>Flash</p>
            <section className="flash-section">
              <Link className="App-link" to="/">
                Home
              </Link>
              <Link className="App-link" to="/new-card">
                New
              </Link>
            </section>
          </header>
        </div>
      </div>
    );
  }
}

export default Flash;
