import React, { Component } from "react";
import { Link } from "@reach/router";
import Header from "../components/Header";
import styles from "./pages.module.css";
class Home extends Component {
  render() {
    return (
      <div className={styles.home_container}>
        <Header />
        <h2>Ready to learn something new ? </h2>
        <footer className={styles.footer}>
          <Link to="/flash">Cycle Cards</Link>
          <Link to="/flash">View Inventory</Link>
        </footer>
      </div>
    );
  }
}

export default Home;
