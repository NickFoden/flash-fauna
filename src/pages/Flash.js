import React, { Component } from "react";
import { Link } from "@reach/router";
import { getAllCards } from "../api/fauna";
import Card from "../components/Card";
class Flash extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      getAllCards()
        .then(cards => {
          this.props.updateCards(cards.data);
        })
        .then(this.props.change());
    }
  }
  render() {
    return (
      <div>
        <div>
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
          <section className="flash-body">
            <ul className="flash-ul">
              {this.props.cards.map(item => {
                const { id } = item.ref.value;
                return (
                  <li key={id}>
                    <Card item={item.data} />
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Flash;
