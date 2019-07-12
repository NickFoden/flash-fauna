import React from "react";
import styles from "./styles.module.css";

const Card = ({ item, expand }) => {
  const { answer, link, subject } = item;
  console.log(expand);
  return (
    <div className={styles.card_container}>
      <h4>{subject}:</h4>
      {expand && (
        <>
          <p>{answer}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Docs
          </a>
        </>
      )}
      <hr />
    </div>
  );
};

export default Card;
