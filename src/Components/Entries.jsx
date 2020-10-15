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
        <table className='entries'>
          <tbody>
            <tr className='table-header'>
              <th>TRICK</th>
              <th>USERNAME</th>
              <th>STANCE</th>
              <th>TYPE</th>
              <th>LANDING</th>
            </tr>
        {entries.map((entry) => (
          <tr className='entry-container' key={entry.id}>
            <td className='entry-cells'>{entry.fields.trick}</td>
            <td className='entry-cells'>{entry.fields.username}</td>
            <td className='entry-cells'>{entry.fields.stance}</td>
            <td className='entry-cells'>{entry.fields.type}</td>
            <td className='entry-cells'>{entry.fields.landing}</td>
          </tr>
        ))}
            </tbody>
        </table>
          
      </div>

    );
  }

export default Entries;