import React, { Component } from "react";
import { Link } from "@reach/router";
import { getAllCards } from "../api/fauna";
import Card from "../components/Card";
import Finished from "../components/Finished";
import styles from "./pages.module.css";
class Cycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCard: 0,
      show: false
    };
  }

  componentDidMount() {
    if (!this.props.loaded) {
      getAllCards()
        .then(cards => {
          this.props.updateCards(cards.data);
        })
        .then(this.props.change());
    }
  }

  next = () => {
    this.setState(prevState => {
      return { currentCard: prevState.currentCard + 1, show: false };
    });
  };
  show = () => {
    this.setState({ show: true });
  };
  render() {
    const { cards } = this.props;
    const { currentCard, show } = this.state;
    return (
      <div>
        <div>
          <header className={styles.flash_header}>
            <Link to="/">Home</Link>
            <Link to="/new-card">New</Link>
          </header>
          <section className={styles.cycle_body}>
            {currentCard < cards.length ? (
              <>
                {cards[currentCard] && (
                  <Card item={cards[currentCard]["data"]} expand={show} />
                )}
                {!show && (
                  <button onClick={this.show} className={styles.button}>
                    {" "}
                    Show Answer
                  </button>
                )}
                {show && (
                  <button onClick={this.next} className={styles.button}>
                    {" "}
                    Next Question
                  </button>
                )}
              </>
            ) : (
              <Finished started={currentCard} />
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default Cycle;
