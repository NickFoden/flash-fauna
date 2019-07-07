import React, { useState } from "react";
import { Link } from "@reach/router";
import { addSingleRecord } from "../api/fauna";
const Flash = () => {
  const [state, updateValues] = useState({});

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
    let data = {
      Subject: state.subject,
      Answer: state.answer
    };
    addSingleRecord("cards", data);
  };
  return (
    <div>
      <header className="new-card-header">
        <Link to="/">Home</Link>
      </header>
      <section className="new-card-body">
        <label>
          Subject:
          <input name="subject" type="text" onChange={handleChange} />
        </label>
        <label>
          Answer:
          <textarea name="answer" rows="5" onChange={handleChange} />
        </label>
        <button onClick={e => handleSubmit(e, state)}>Submit</button>
      </section>
    </div>
  );
};

export default Flash;
