import React from "react";
import styles from "./styles.module.css";

const Card = ({ item, expand }) => {
  const { answer, link, subject, type } = item;
  return (
    <div className={styles.card_container}>
      <h4>{subject}:</h4>
      <h5 className={styles.card_type}>({type})</h5>
      {expand && (
        <>
          <p>{answer}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Ref
          </a>
        </>
      )}
      <hr />
    </div>
  );
};

export default Card;
