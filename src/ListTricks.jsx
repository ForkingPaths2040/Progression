import React from "react";
import { Link } from 'react-router-dom'

function ListTricks(props) {

  return (
    <div>
      {props.tricks.map((trick) => (
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
