import React from 'react';
import { browserHistory, Link } from 'react-router';


const MuralShow = (props) => {
  return(
    <div id="show-mural">
      <h1 id= "show-mural-title">{props.mural.title}</h1>
      <h5 id = "show-mural-location">location: {props.mural.location}</h5>
      <div id="show-mural-image">
        <img src={props.mural.photo.url} />
      </div>
      <p id="show-mural-description">{props.mural.description}</p>
    </div>
  )
}

export default MuralShow;
