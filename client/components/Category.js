import React from 'react';
import PropTypes from 'prop-types';
import Clue from './Clue.js';


const Category = props => {


  return (
    <div className='category' data-testid="category">
      {/* display category */}
      <div className='categoryTitle' key={props.id} id={props.id}>{props.title}</div>
      {/* display clues for each category */}
      {props.category.clues.map( (question) => {
        return (
          <Clue 
          key={question.id} 
          id={question.id}
          clue={question.question} 
          answer={question.answer} 
          value={question.value}/>
        );
      })}
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Category;
