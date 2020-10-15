import React from 'react';
import { useParams, Link} from 'react-router-dom'


function TrickPage(props) {
  let params = useParams()
  
  let trick = props.tricks.find((t) => {
  return t.fields.name === params.name
  })

  return (
    <div className='trick-page-container'>
    <div className='trick-page'>
      <div className='trick-page-image'><img src={trick.fields.giph} alt={trick.fields.name} /></div>
      <h1>{trick.fields.name}</h1>
      <p>{trick.fields.description}</p>
      <li>{trick.fields.timeline}</li>
      <li>{trick.fields.type}</li>
      <Link to='/entry' id='button-link'>
        <button>Try for yourself!</button>
        </Link>
      </div>
      </div>
  );
};

export default TrickPage;