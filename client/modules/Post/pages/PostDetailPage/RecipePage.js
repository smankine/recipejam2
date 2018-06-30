import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

// Import Actions
import { getRecipe } from '../../PostActions';

// Import Selectors
import { getPost } from '../../PostReducer';

export function RecipePage(props) {
  return (
    <div>
      <div>
        <h3>SSSS</h3>
        <p >gdgd</p>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
RecipePage.need = [params => {
  return getRecipe();
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    recipes: state.posts.recipes,
  };
}
export default connect(mapStateToProps)(RecipePage);
