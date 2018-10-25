import React from 'react';
import { browserHistory, Link } from 'react-router';


const ReviewForm = (props) => {
  return(
    <div>
      <form className="form" id="reviewForm">
        <label>
          Comment:
          <input name="comment" type='text' value={props.fieldValue} onChange={props.commentChangeHandler}/>
        </label>
        <label>
          Rating:
          <select onChange={props.ratingChangeHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <input id="new-comment-button" className="button" type="submit" value="Submit" onClick={props.submitHandler}/>
      </form>
    </div>
  )
}

export default ReviewForm;
