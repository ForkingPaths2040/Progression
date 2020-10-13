import React, {useEffect, useState} from "react";
import { Link, Route } from "react-router-dom";
import ListTricks from "./ListTricks";
import TrickPage from './TrickPage'
import Entries from './Entries'
import Form from "./Form";
import axios from 'axios'
import "./App.css";

function App() {
  const [tricks, setTricks] = useState([]);
  useEffect(() => {
    const getTricks = async () => {
      const airtableURL = `https://api.airtable.com/v0/appsnyAAoewIo80Ig/tricks`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer keyA4pUKd1DMLTmI9`,
        },
      });
      setTricks(response.data.records);
    };
    getTricks();
  }, []);
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/entry">New Entry</Link>
          </li>
          <li>
            <Link to="/tricks">Tricks</Link>
          </li>
          <li>
            <Link to="/progressions">Progressions</Link>
          </li>
        </ul>
      </nav>
      <Route  exact path="/tricks">
        <ListTricks tricks={tricks}/>
      </Route>
      <Route path="/entry">
        <Form />
      </Route>
      <Route path={`/tricks/:name`}>
        <TrickPage tricks={tricks} />
      </Route>
      <Route path='/progressions'>
        <Entries />
      </Route>
    </div>
  );
}

export default App;
