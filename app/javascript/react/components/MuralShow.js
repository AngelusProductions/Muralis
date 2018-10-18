import React from 'react';
import { browserHistory, Link } from 'react-router';

const MuralShow = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <h5>location: {props.location}</h5>
      <img src={props.photo} />
      <p>{props.description}</p>
    </div>
  )
}

export default MuralShow;
