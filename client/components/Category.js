import React from 'react';
import PropTypes from 'prop-types';

const Category = props => {
  return (
    <div className={'category'} data-testid="category">
      {/* display category */}
      <div key={props.key}>{props.title}</div>
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
