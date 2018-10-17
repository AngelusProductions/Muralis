import React, { Component } from 'react';
import MuralShow from '../components/MuralShow';

class MuralsShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mural: {}
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
        id={this.state.mural.id}
        title={this.state.mural.title}
        description={this.state.mural.description}
        location={this.state.mural.location}
        photo={this.state.mural.photo}
        user_id={this.state.mural.user_id}
        upvotes={this.state.mural.upvotes}
        downvotes={this.state.mural.downvotes}
       />
    )
  }
}

export default MuralsShowContainer;
