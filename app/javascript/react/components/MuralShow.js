import React from 'react';
import { browserHistory, Link } from 'react-router';

const MuralShow = (props) => {
  debugger
  return(
    <div>
      <h1>{props.mural.title}</h1>
      <h5>location: {props.mural.location}</h5>
      <img src={props.mural.photo} />
      <p>{props.mural.description}</p>
    </div>
  )
}

export default MuralShow;
