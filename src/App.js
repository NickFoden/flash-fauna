import React, { useState } from "react";
import { Router } from "@reach/router";
import Flash from "./pages/Flash";
import Home from "./pages/Home";
import NewCard from "./pages/NewCard";
// import NewClass from "./pages/NewClass";
import "./App.css";

function App() {
  const [currentCards, updateCards] = useState([]);
  const [state, updateValues] = useState(false);
  const handleChange = () => {
    updateValues(!state);
  };

  return (
    <Router>
      <Home path="/" />
      <Flash
        path="/flash"
        loaded={state}
        change={handleChange}
        cards={currentCards || []}
        updateCards={updateCards}
      />
      <NewCard path="/new-card" change={handleChange} />
      {/* <NewClass path="/new-class" /> */}
    </Router>
  );
}

export default App;
