import React, { useState } from "react";
import { Link } from "@reach/router";
import { addSingleRecord } from "../api/fauna";
const NewCard = () => {
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
    addSingleRecord("cards", data).then(() => {
      updateValues(initialState);
    });

    this.props.change();
  };
  return (
    <div>
      <header className="new-card-header">
        <Link to="/">Home</Link>
      </header>
      <section className="new-card-body">
        <label>
          Type:
          <select name="type" onChange={handleChange} value={state.type}>
            <option value="" />
            <option value="keyword">keyword</option>
            <option value="method">method</option>
            <option value="html">html</option>
            <option value="css">css</option>
          </select>
        </label>
        <label>
          Subject:
          <input
            name="subject"
            type="text"
            onChange={handleChange}
            value={state.subject}
          />
        </label>
        <label>
          Answer:
          <textarea
            name="answer"
            rows="5"
            onChange={handleChange}
            value={state.answer}
          />
        </label>
        <label>
          Link:
          <input
            name="link"
            type="text"
            onChange={handleChange}
            value={state.link}
          />
        </label>

        <button onClick={e => handleSubmit(e, state)}>Submit</button>
      </section>
    </div>
  );
};

export default NewCard;
