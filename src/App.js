import React from "react";
import { Link, Route } from "react-router-dom";
import ListTricks from "./ListTricks";
import TrickPage from './TrickPage'
import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/form">New +</Link>
          </li>
          <li>
            <Link to="/tricks">Tricks</Link>
          </li>
        </ul>
      </nav>
      <Route path="/tricks">
        <ListTricks />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path={`/tricks/:name`}>
        <TrickPage />
      </Route>
    </div>
  );
}

export default App;
