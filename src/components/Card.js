import React from "react";

const Card = props => {
  const { answer, link, subject } = props.item;
  return (
    <div className="card-container">
      <h4>{subject}:</h4>
      <p>{answer}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Docs
      </a>
      <hr />
    </div>
  );
};

export default Card;
