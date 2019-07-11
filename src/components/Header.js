import React, { Component } from "react";
import styles from "./styles.module.css";

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>Flash</h1>
      </div>
    );
  }
}
