import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Entries() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const getEntries = async () => {
      const airtableURL = `https://api.airtable.com/v0/appsnyAAoewIo80Ig/progressions`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer keyA4pUKd1DMLTmI9`,
        },
      });
      setEntries(response.data.records);
    };
    getEntries();
  }, []);
    return (
      <div>
        
        <div id='entry-header'>
          <h1>Username</h1>
          <h1>Trick</h1>
          <div className='entry-list'>
          <h1>Landing</h1>
          <h1>Type</h1>
          <h1>Stance</h1></div>
          </div>
        {entries.map((entry) => (
          <a href={entry.fields.giph} target='_blank' rel='noopener noreferrer' key={entry.id}><div className='entry-container' key={entry.id}>
            <h3 className='entry-title'>{entry.fields.username}</h3>
            <h3>{entry.fields.trick}</h3>
            <div className='entry-list'><h3>{entry.fields.landing}</h3>
            <h3>{entry.fields.type}</h3>
            <h3>{entry.fields.stance}</h3></div>
            </div> </a>
        ))}          
      </div>

    );
  }

export default Entries;