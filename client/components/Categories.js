import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category.js';

const Categories = props => {
  return (
    <div id={'categories'} data-testid="categoryList">
      {props.categories.map( (category) => {
        return (
          <Category 
            key={category.id} 
            id={category.id} 
            title={category.title} 
            category={category}/>
        );
      })}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  selectQuestion: PropTypes.func,
  currentQuestion: PropTypes.object,
  answeredQuestions: PropTypes.array
};

export default Categories;
