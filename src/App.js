import React from "react";
import { Link, Route } from "react-router-dom";
import ListTools from "./ListTools";
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/tools">Tools</Link>
        <Link to="/form">New +</Link>
      </nav>
      <Route path="/tools">
        <ListTools />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
    </div>
  );
}

export default App;
