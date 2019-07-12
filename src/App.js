import React, { useState } from "react";
import { Router } from "@reach/router";
import Cycle from "./pages/Cycle";
import Flash from "./pages/Flash";
// import Header from "./components/Header";
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
        <Cycle
          path="/cycle"
          loaded={state}
          change={handleChange}
          cards={currentCards || []}
          updateCards={updateCards}
        />
        <NewCard path="/new-card" change={handleChange} />
        {/* <NewClass path="/new-class" /> */}
      </Router>
      <footer className="constant_footer">
        <a
          href="https://nef.dev"
          target="_blank"
          rel="noopener noreferrer"
          title="Nick is Online"
        >
          <p>© Nick Foden {new Date().getFullYear()}</p>{" "}
        </a>
      </footer>
    </div>
  );
}

export default App;
