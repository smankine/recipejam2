import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

// Import Components
import RecipeItem from './RecipeItem';

// Import Actions
import { getRecipes} from '../../PostActions';

import styles from './Header.css';

class RecipeListPage extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: [], searchterm: ''};
  }

  componentDidMount() {
    this.props.dispatch(getRecipes());

  }

  selectItem = (item) => {
    console.log("clicksss", item)
  };



  render() {
    var items = "";
    var selected = [];
    console.log("here " ,this.props.recipes)
    if (this.props && this.props.recipes && this.props.recipes.length &&  this.props.recipes.map) {
      items =
        this.props.recipes.map(post => (
          <RecipeItem selectItem={this.selectItem}
                       post={post}
          />
        ))
    }

    return (
      <div className={styles.recipesmain}>
        <h1>Recipes</h1>

        <div className="incredientsDiv">
          {items}
        </div>
        <div className="searchPanel">
          <button>Search</button>
        </div>

      </div>
    );
  }
}

// // Actions required to provide data for this component to render in sever side.
// PostListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    recipes: state.posts.recipes.matches,

  };
}
RecipeListPage.need = [() => {
  return getRecipes();
}];


export default connect(mapStateToProps)(RecipeListPage);
