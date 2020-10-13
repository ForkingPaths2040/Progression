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
        {entries.map((entry) => (
          <div className='entry-container' key={entry.id}>
            <h4 className='entry-cells'>{entry.fields.trick}</h4>
            <h4 className='entry-cells'>{entry.fields.username}</h4>
            <h4 className='entry-cells'>{entry.fields.stance}</h4>
            <h4 className='entry-cells'>{entry.fields.type}</h4>
            <h4 className='entry-cells'>{entry.fields.landing}</h4>
            </div>
        ))}
      </div>

    );
  }

export default Entries;