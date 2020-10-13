import React from 'react';
import { useParams, Link} from 'react-router-dom'


function TrickPage(props) {
  let params = useParams()
  
  let trick = props.tricks.find((t) => {
  return t.fields.name === params.name
  })
console.log(trick)
  return (
    <div>
      <img src={trick.fields.giph} alt={trick.fields.name} />
      <h1>{trick.fields.name}</h1>
      <p>{trick.fields.description}</p>
      <li>{trick.fields.timeline}</li>
      <li>{trick.fields.type}</li>
      <Link to='/entry'>
        <button>Try for yourself!</button>
        </Link>
    </div>
  );
};

export default TrickPage;