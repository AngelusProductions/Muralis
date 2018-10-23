import React from 'react';
import { browserHistory, Link } from 'react-router';


const MuralShow = (props) => {
  return(
    <div>
      <h1>{props.mural.title}</h1>
      <h5>location: {props.mural.location}</h5>
      <img src={props.mural.photo.url} />
      <p>{props.mural.description}</p>
    </div>
  )
}

export default MuralShow;
