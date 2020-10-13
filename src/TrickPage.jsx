import React from 'react';
import { useParams } from 'react-router-dom'


function TrickPage(props) {
  let params = useParams()
  
  let trick = props.tricks.find((t) => {
  return t.fields.name === params.name
  })

  return (
    <div>
      <h1>{params.name}</h1>
      <p></p>
    </div>
  );
};

export default TrickPage;