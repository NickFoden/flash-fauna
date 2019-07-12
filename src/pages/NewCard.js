import React, { useState } from "react";
import { Link } from "@reach/router";
import { addSingleRecord } from "../api/fauna";
import styles from "./pages.module.css";
const NewCard = props => {
  console.log(props);

  const initialState = {
    answer: "",
    link: "",
    subject: "",
    type: ""
  };
  const [state, updateValues] = useState(initialState);

  const handleChange = event => {
    event.persist();
    updateValues(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (e, state) => {
    e.preventDefault();
    console.dir(state);
    const { answer, link, subject, type } = state;
    let data = {
      answer,
      link,
      subject,
      type
    };
    addSingleRecord("cards", data)
      .then(() => {
        updateValues(initialState);
      })
      .then(() => props.change());
  };
  return (
    <div className={styles.new_card_container}>
      <header className={styles.flash_header}>
        <Link to="/">Home</Link>
      </header>
      <section className={styles.new_card_body}>
        <label>
          Type:
          <select
            name="type"
            onChange={handleChange}
            value={state.type}
            className={styles.select}
          >
            <option value="">Choose </option>
            <option value="keyword">keyword</option>
            <option value="method">method</option>
            <option value="html">html</option>
            <option value="css">css</option>
          </select>
        </label>
        <label>Subject:</label>
        <input
          name="subject"
          type="text"
          onChange={handleChange}
          value={state.subject}
        />
        <label>Answer:</label>
        <textarea
          name="answer"
          rows="5"
          onChange={handleChange}
          value={state.answer}
        />

        <label>Link:</label>
        <input
          name="link"
          type="text"
          onChange={handleChange}
          value={state.link}
        />

        <button onClick={e => handleSubmit(e, state)}>Submit</button>
      </section>
    </div>
  );
};

export default NewCard;
