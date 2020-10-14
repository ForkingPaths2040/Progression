import React from "react";
import { Link } from 'react-router-dom'

function ListTricks(props) {

  return (
    <div className="page-length">
    <div className= "all-tricks">
      {props.tricks.map((trick) => (
        <div className="trick-container" key={trick.id}>
          <Link to={`/tricks/${trick.fields.name}`} style={{textDecoration: 'none'}}>
            <div className="list-button">{trick.fields.name}</div>
            </Link>
        </div>
      ))}
      
      </div>
      </div>
  );
}

export default ListTricks;
