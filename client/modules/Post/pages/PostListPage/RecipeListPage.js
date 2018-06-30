import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

// Import Components
import PictureItem from './PictureItem';
import SelectedItem from './SelectedItem';

// Import Actions
import { getRecipes} from '../../PostActions';


class RecipeSearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: [], searchterm: ''};
  }

  componentDidMount() {
    this.props.dispatch(getIncredients());

  }

  selectItem = (item) => {
    console.log("clicksss", item)

  };



  render() {

    var items = "";
    var selected = [];

    console.log("here " + this.props.recipes)
    if (this.props && this.props.recipes && this.props.recipes.length) {
      items =
        this.props.recipes.map(post => (
          <PictureItem selectItem={this.selectItem}
                       post={post}
          />
        ))
    }

    return (
      <div className="page1">
        <h1>Title</h1>

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
    recipes: state.posts.recipes,

  };
}
RecipeSearchPage.need = [() => {
  return getRecipes();
}];


export default connect(mapStateToProps)(RecipeSearchPage);
