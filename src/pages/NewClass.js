import React, { useState } from "react";
import { Link } from "@reach/router";
import { addNewClass } from "../api/fauna";
const NewClass = () => {
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
    addNewClass(state.class);
  };
  return (
    <div>
      <header className="new-card-header">
        <Link to="/">Home</Link>
      </header>
      <section className="new-card-body">
        <label>
          Class:
          <input name="class" type="text" onChange={handleChange} />
        </label>
        <button onClick={e => handleSubmit(e, state)}>Submit</button>
      </section>
    </div>
  );
};

export default NewClass;
