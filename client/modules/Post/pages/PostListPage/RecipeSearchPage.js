import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

// Import Components
import PictureItem from './PictureItem';
import SelectedItem from './SelectedItem';
import styles from './Header.css';
// Import Actions
import {addPostRequest, getIncredients, deletePostRequest} from '../../PostActions';


class RecipeSearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: [], searchterm: ''};
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


    var index = this.state.selected.indexOf(item)

    if (index < 0) {
      var ii = this.state.selected.concat([item]);

      this.setState({selected: ii})
      var s = ii.map(post => (
        post.name + " "
      ))
      this.setState({searchterm: s})
      console.log(s);
    }
  };

  deselecteItem = (item) => {
    console.log("deselecte", item)

    var array = [...this.state.selected]; // make a separate copy of the array
    var index = array.indexOf(item)
    array.splice(index, 1);
    this.setState({selected: array});

    var s = array.map(post => (
      post.name + " "
    ))
    this.setState({searchterm: s})
    console.log(s);
  };

  render() {

    var items = "";
    var selected = [];

    console.log("here " + this.props.incredients)
    if (this.props && this.props.incredients && this.props.incredients.length) {
      items =
        this.props.incredients.map(post => (
          <PictureItem selectItem={this.selectItem}
                       post={post}
          />

        ))
    }

    if (this.state && this.state.selected && this.state.selected.length) {
      selected =
        this.state.selected.map(post => (
          <SelectedItem deselecteItem={this.deselecteItem}
                        post={post}
          />
        ))

    }
    return (
      <div className="page1">
        <h1>Select the ingredients you have</h1>
        <div className="selectedItemsDiv">
          {selected}

        </div>
        <div className="incredientsDiv">
          {items}
        </div>
        {this.state.terms}
        <div   className={styles.searchPanel}>
          {/*{this.state.searchterm}*/}
          <input placeholder="Search..." type="text" value={this.state.searchterm}></input>
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
