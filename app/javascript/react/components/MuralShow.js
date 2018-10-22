import React from 'react';
import { browserHistory, Link } from 'react-router';

<<<<<<< HEAD

const MuralShow = (props) => {
=======
const MuralShow = (props) => {
  debugger
>>>>>>> 724d0f8397c809acb3a99711ca505b561c5d2eb2
  return(
    <div>
      <h1>{props.mural.title}</h1>
      <h5>location: {props.mural.location}</h5>
<<<<<<< HEAD
      <img src={props.mural.photo.url} />
      <p>{props.mural.description}</p>
      <button><Link to={"http://localhost:3000/murals/1/reviews/new"}>Post a new review</Link></button>
=======
      <img src={props.mural.photo} />
      <p>{props.mural.description}</p>
>>>>>>> 724d0f8397c809acb3a99711ca505b561c5d2eb2
    </div>
  )
}

export default MuralShow;
