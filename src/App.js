import React, { useState } from "react";
import { Link, Router } from "@reach/router";
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
    <div>
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
      <footer className="constant_footer">
        <a href="https://nef.dev" target="_blank" rel="noopener noreferrer">
          <p>© Nick Foden {new Date().getFullYear()}</p>{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
