import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category.js';

const Clue = props => {
  var clicked = false;

  function handleClick() {
    console.log(props.clue)
    clicked = true;
  }
  //if not clicked show value
  if (!props.clicked) {
    return <div className="clueValue" onClick={handleClick}>{props.value}</div>;
  } else if (props.clicked) {
    //when clicked, show clue question
    return <div>{props.clue}</div>
  } else {
  //when answered empty screen
    return <div></div>
  }
};

Clue.propTypes = {
  selected: PropTypes.bool,
  selectQuestion: PropTypes.func,
  answered: PropTypes.bool,
  clueObject: PropTypes.object
};

export default Clue;
