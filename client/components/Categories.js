import React from 'react';
import PropTypes from 'prop-types';

const Categories = props => {
  console.log(props.categories)
  return (
    <div id={'categories'} data-testid="categoryList">
      {/* display all the categories */}
      {
        props.categories.map( (category) => {
          return (
            <div key={category.id}>{category.title}</div>
          );
        })
      }
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
