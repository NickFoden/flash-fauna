import React from "react";
import { Router } from "@reach/router";
import Flash from "./pages/Flash";
import Home from "./pages/Home";
import NewCard from "./pages/NewCard";
// import NewClass from "./pages/NewClass";
import "./App.css";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Flash path="/flash" />
      <NewCard path="/new-card" />
      {/* <NewClass path="/new-class" /> */}
    </Router>
  );
}

export default App;
