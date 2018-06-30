import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';

// Import Components
import PictureItem from './PictureItem';

// Import Actions
import {addPostRequest, getIncredients, deletePostRequest} from '../../PostActions';


class RecipeSearchPage extends Component {
  componentDidMount() {
    this.props.dispatch(getIncredients());
    this.state = {
      selected:[]
    }
  }


  handleSearch = (name, title, content) => {
    // this.props.dispatch(toggleAddPost());
    // this.props.dispatch(addPostRequest({ name, title, content }));
  };

  selectItem = (name, title, content) => {
    console.log("click", item)

    this.state = {
      selected:[]
    }
  };

  render() {

    var items = "";
    var selected = [];
    function selectItem(item){
      console.log("click", item)
      selected.push (item)
    }

    function deleteselectItem(item){

    }

    console.log("here "+ this.props.incredients)
    if (this.props && this.props.incredients && this.props.incredients.length) {
      items =
        this.props.incredients.map(post => (
          <PictureItem onClick={(e) => this.selectItem(e)}
            post={post}
          />
        ))

    }
    return (
      <div>
        Select the incredients you have
        {selected}
        Above deselected
        {items}
        {/*<PostList handleDeletePost={this.handleDeletePost} posts={this.props.posts} />*/}
        <input placeholder="akkkak" type="text"></input>
        <button>Search</button>
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
