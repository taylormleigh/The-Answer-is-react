import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Response extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userResponse: ''
    }
    this.recordResponse = this.recordResponse.bind(this);
  }
  recordResponse(newText) {
    this.setState({ userResponse: newText });
  }
  submitResponse(event) {
    // this function should fire when the user fills the response and hits 'enter'
    if (event.key === 'Enter') {
      
      this.recordResponse( event.target.value );
      //compare this.state.userResponse to answer, if it's correct
      console.log(id);
      if (this.props.categories[id].clues.answer === this.state.userResponse) {
        // raise score
        this.props.score += this.props.categories.clues.value;
      //if not
      } else {
        //lower score
        this.props.score -= this.props.categories.clues.value;
      }
    }
  }

  render(){
    return (
      <div id={'response'} data-testid="response">
        <input
          type='text'
          placeholder='Answers go here!'
          // handle data change
          // handle when 'enter' is hit
          onKeyPress={this.submitResponse.bind(this)}
        >
        </input>
      </div>
    )
  }
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}