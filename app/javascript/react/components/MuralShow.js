import React from 'react';
import { browserHistory, Link } from 'react-router';


const MuralShow = (props) => {
  return(
    <div>
      <h1>{props.mural.title}</h1>
      <h5>location: {props.mural.location}</h5>
      <img src={props.mural.photo.url} />
      <p>{props.mural.description}</p>
      <button><Link to={"http://localhost:3000/murals/1/reviews/new"}>Post a new review</Link></button>
    </div>
  )
}

export default MuralShow;
