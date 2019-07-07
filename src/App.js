import React from "react";
import { Router } from "@reach/router";
import Flash from "./pages/Flash";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Flash path="/flash" />
    </Router>
  );
}

export default App;
