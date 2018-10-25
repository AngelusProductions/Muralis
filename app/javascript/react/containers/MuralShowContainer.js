import React, { Component } from 'react';
import MuralShow from '../components/MuralShow';
import ReviewForm from '../components/ReviewForm';
import ReviewTile from '../components/ReviewTile';
import { ToastContainer } from 'react-toastify';
import toast from '../components/toast.js'


class MuralShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mural: {
        "id": 0,
        "title": "",
        "description": "",
        "location": "",
        "photo": {
          "url": ""
        },
        "upvotes": 0,
        "downvotes": 0,
        "user_id": 0,
        "created_at": "",
        "updated_at": ""
      },
    reviews: [],
    comment: "",
    rating: "1",
    currentUser:{
      id: 0,
      first_name: "",
      last_name: "",
      user_photo: "",
      username: "",
      email: "",
      created_at: "",
      updated_at: ""
    }

    }
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitNewReview = this.submitNewReview.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.notify = this.notify.bind(this);
  }

  notify(){
    toast.success("You've successfully submitted a review!")
  }
  getReviews(){
    return fetch(`/api/v1/reviews`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let relevantReviews = []
      body.forEach((review) => {
        if(this.state.mural.id == review.mural_id){
          relevantReviews.push(review)
        }
      })
      this.setState({ reviews: relevantReviews });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    fetch(`/api/v1/murals/${this.props.params.id}`)
      .then(response => {
          if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ mural: body });
        fetch(`/api/v1/user`)
          .then(response => {
              if (response.ok) {
              return response;
            } else {
              let errorMessage = `${response.status} (${response.statusText})`,
                  error = new Error(errorMessage);
              throw(error);
            }
          })
          .then(response => response.json())
          .then(body => {
            this.setState({ currentUser: body });
            fetch(`/api/v1/reviews`)
            .then(response => {
              if (response.ok) {
                return response;
              } else {
                let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
                throw(error);
              }
            })
            .then(response => response.json())
            .then(body => {
              let relevantReviews = []
              body.forEach((review) => {
                if(this.state.mural.id == review.mural_id){
                  relevantReviews.push(review)
                }
              })
              this.setState({ reviews: relevantReviews });
            })
            .catch(error => console.error(`Error in fetch: ${error.message}`));
          })
          .catch(error => console.error(`Error in fetch: ${error.message}`));
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }


  handleCommentChange(event){
    this.setState({comment: event.target.value})
  }

  handleRatingChange(event){
    this.setState({rating: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    let payloadRating = parseInt(this.state.rating,10)
    let review = {
      comment:this.state.comment,
      rating:payloadRating,
      user_id:this.state.currentUser.id,
      mural_id:this.state.mural.id
    }
    this.submitNewReview(review)
  }

  submitNewReview(payload){
    fetch ('/api/v1/reviews', {
      method: 'POST',
      body: JSON.stringify(payload),
      credentials: 'same-origin',
      headers: {
       'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let newReviews = this.state.reviews.concat(body)
      this.setState({ reviews :newReviews })
      this.notify()
    })
    .catch(error => console.error('Error:', error));
  }


  render() {
    let outputReviews = this.state.reviews.map((review) => {
      return(
        <ReviewTile
          key={review.id}
          comment= {review.comment}
          rating= {review.rating}
        />
      )
    })

    return(
      <div>
        <ToastContainer />
        <MuralShow
          mural = {this.state.mural}
          />
        {outputReviews}
        <ReviewForm
          fieldValue={this.state.comment}
          commentChangeHandler={this.handleCommentChange}
          ratingChangeHandler ={this.handleRatingChange}
          submitHandler={this.handleSubmit}
          />
      </div>
    )
  }
}

export default MuralShowContainer;
