import React, { useEffect, useState } from "react";
import axios from "axios";

function ListTools() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const getTools = async () => {
      const airtableURL = `https://api.airtable.com/v0/appsnyAAoewIo80Ig/tools`;
      const response = await axios.get(airtableURL, {
        headers: {
          Authorization: `Bearer keyA4pUKd1DMLTmI9`,
        },
      });
      setTools(response.data.records);
    };
    getTools();
  }, []);

  return (
    <div>
      {tools.map((tool) => (
        <div key={tool.fields.number}>
          <h3>{tool.fields.name}</h3>
          <h3>{tool.fields.description}</h3>
          <h3>{tool.fields.brand}</h3>
          <h3>{tool.fields.location}</h3>
          <h3>{tool.fields.category}</h3>
          <iframe src={tool.fields.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ListTools;
