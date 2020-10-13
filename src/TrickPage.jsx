import React from 'react';
import { useParams } from 'react-router-dom'


function TrickPage(props) {
  let params = useParams()
  


  return (
    <div>
      <h1>{params.name}</h1>
      <p>{console.log(props.tricks)}</p>
    </div>
  );
};

export default TrickPage;