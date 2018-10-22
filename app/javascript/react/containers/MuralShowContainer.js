import React, { Component } from 'react';
import MuralShow from '../components/MuralShow';

class MuralShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
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
      }
=======
      mural: {}
>>>>>>> 724d0f8397c809acb3a99711ca505b561c5d2eb2
    }
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
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <MuralShow
        mural = {this.state.mural}
       />
    )
  }
}

export default MuralShowContainer;
