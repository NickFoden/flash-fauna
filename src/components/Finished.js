import React from "react";
import { Link } from "@reach/router";
import styles from "./styles.module.css";
const Finished = ({ started }) => {
  if (started > 1) {
    return (
      <section className={styles.section_finished}>
        <h1>Nice work! You have reached the end.</h1>
        <Link to="/">
          <h3 className={styles.back_home}> Back Home</h3>
        </Link>
      </section>
    );
  } else {
    return null;
  }
};

export default Finished;
