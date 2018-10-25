import React from 'react';

const ReviewTile = (props) => {
  return(
    <li className ="reviewList">
      <p>Comment: {props.comment} || Rating: {props.rating}</p>
    </li>
  )
  }

  export default ReviewTile;
