import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

function ListTricks() {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    const getTricks = async () => {
      const airtableURL = `https://api.airtable.com/v0/appsnyAAoewIo80Ig/tools`;
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
    <div>
      {tricks.map((trick) => (
        <div className="tricks-container" key={trick.fields.number}>
          <Link to={`/tricks/${trick.fields.name}`}>
            <button className="list-button">{trick.fields.name}</button>
            </Link>
        </div>
      ))}
      
    </div>
  );
}

export default ListTricks;
