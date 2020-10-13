import React, {useEffect, useState} from "react";
import { Link, Route } from "react-router-dom";
import ListTricks from "./ListTricks";
import TrickPage from './TrickPage'
import Video from './Video'
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
            <Link to="/form">New +</Link>
          </li>
          <li>
            <Link to="/tricks">Tricks</Link>
          </li>
          <li>
            <Link to="/videos">Video</Link>
          </li>
        </ul>
      </nav>
      <Route  exact path="/tricks">
        <ListTricks tricks={tricks}/>
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path={`/tricks/:name`}>
        <TrickPage tricks={tricks} />
      </Route>
      <Route path='/videos'>
        <Video />
      </Route>
    </div>
  );
}

export default App;
