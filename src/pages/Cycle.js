import React, { Component } from "react";
import { Link } from "@reach/router";
import { getAllCards } from "../api/fauna";
import Card from "../components/Card";
import styles from "./pages.module.css";
class Cycle extends Component {
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
          <header className={styles.flash_header}>
            <Link to="/">Home</Link>
            <Link to="/new-card">New</Link>
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

export default Cycle;
