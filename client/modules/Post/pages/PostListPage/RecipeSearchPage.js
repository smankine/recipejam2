import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

// Import Components
import PictureItem from './PictureItem';
import SelectedItem from './SelectedItem';

// Import Actions
import {addPostRequest, getIncredients, deletePostRequest} from '../../PostActions';


class RecipeSearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: []};
  }

  componentDidMount() {
    this.props.dispatch(getIncredients());

  }


  handleSearch = (name, title, content) => {
    // this.props.dispatch(toggleAddPost());
    // this.props.dispatch(addPostRequest({ name, title, content }));
  };

  selectItem = (item) => {
    console.log("clicksss", item)

    // var newlist = this.state.selected.push(item);
    //
    // this.state = {
    //   selected:newlist
    // }
    this.setState({selected: this.state.selected.concat([item])})
  };

  deselecteItem = (item) => {
    console.log("deselecte", item)

    var array = [...this.state.selected]; // make a separate copy of the array
    var index = array.indexOf(selected)
    array.splice(index, 1);
    this.setState({selected: array});
  };

  render() {

    var items = "";
    var selected = [];

    console.log("here "+ this.props.incredients)
    if (this.props && this.props.incredients && this.props.incredients.length) {
      items =
        this.props.incredients.map(post => (
          <PictureItem selectItem={this.selectItem}
            post={post}
          />

        ))
    }

    if (this.state &&this.state.selected && this.state.selected.length) {
      selected =
        this.state.selected.map(post => (
          <SelectedItem deselecteItem={this.deselecteItem}
                       post={post}
          />
        ))

    }
    return (
      <div class="page1">
        <h1>Select the incredients you have</h1>
        <div class="selectedItemsDiv">
          Above deselected
        {selected}

        </div>
        <div class="incredientsDiv">
          {items}
        </div>

        <div class="searchPanel">
          <input placeholder="akkkak" type="text"></input>
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
    incredients: state.posts.incredients.incredients,

  };
}
RecipeSearchPage.need = [() => {
  return getIncredients();
}];


export default connect(mapStateToProps)(RecipeSearchPage);
