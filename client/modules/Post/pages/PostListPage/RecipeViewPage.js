import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

// Import Components
import RecipeIncredientItem from './RecipeIncredientItem';
import SelectedItem from './SelectedItem';

// Import Actions
import {getView} from '../../PostActions';


class RecipeViewPage extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: [], searchterm: ''};
  }

  componentDidMount() {
    this.props.dispatch(getView());

  }

  selectItem = (item) => {
    console.log("clicksss", item)

  };


  render() {

    var items = "";
    var selected = [];

    console.log("here " + this.props.recipes)
    if (this.props && this.props.data&& this.props.data.incredients && this.props.data.incredients.length) {
      items =
        this.props.data.incredients.map(post => (
          <RecipeIncredientItem selectItem={this.selectItem}
                       post={post}
          />
        ))
    }

    return (
      <div className="page1">
        <h1>Title</h1>

        <img src={this.props.data.image}/>

        <div className="incredientsDiv">
          {items}
        </div>
        <div>Incredients</div>
        {incredientList}

        <div className="directionsPanel">
          <button>Go to recipe Direction</button>
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
    data: state.posts.view,

  };
}
RecipeViewPage.need = [() => {
  return getView();
}];


export default connect(mapStateToProps)(RecipeViewPage);