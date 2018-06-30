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

      var arr = ["https://www.dropbox.com/s/3rjo1rp5h32uip0/matchBar4.png",
        "https://www.dropbox.com/s/j26dmhc4acugmh3/matchBar2.png",
        "https://girlgeeksydney.slack.com/files/UB3DBA4P3/FBGHPCWQ4/matchbar1.png",
        "https://files.slack.com/files-tmb/T28DJ22R2-FBG3TN1BJ-7838c87860/matchbar3_1024.png"];

      var arr = ["matchBar4_preview.png",
        "/matchBar4_preview.png",
        "/matchBar4_preview.png",
        "matchBar4_preview.png"];

      // console.log("body.matches" + body.matches)
      var i = 0;
      this.props.recipes.forEach(function (o) {
        o.barUrl = arr[i];

        if (i > 2) {
          i = 0;
        }
      })


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
