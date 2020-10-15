import React, {useEffect, useState} from "react";
import { Route } from "react-router-dom";
import ListTricks from "./Components/ListTricks";
import TrickPage from './Components/TrickPage'
import Entries from './Components/Entries'
import Form from "./Components/Form";
import axios from 'axios'
import "./App.css";
import Header from "./Components/Header";
import HomePage from './Components/HomePage'

function App() {
  const [tricks, setTricks] = useState([]);
  useEffect(() => {
    const getTricks = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/tricks`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setTricks(response.data.records);
    };
    getTricks();
  }, []);
  return (
    <div className="App">
      <Header />
      <Route exact path='/'>
      <HomePage />
      </Route>
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