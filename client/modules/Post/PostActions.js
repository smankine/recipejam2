import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const ADD_RECIPES = 'ADD_RECIPES';
export const SELECT_RECIPE = 'SELECT_RECIPE';
export const SEARCH_RECIPES = 'SEARCH_RECIPES';
export const ADD_INCREDIENTS = 'ADD_INCREDIENTS';
export const ADD_VIEW = 'ADD_VIEW';
export const ADD_SEARCH = 'ADD_SEARCH';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addrecipe(res)));
  };
}


export function addrecipe(posts) {
  return {
    type: ADD_RECIPES,
    data: posts,
  };
}

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function addSearch(posts) {
  return {
    type: ADD_SEARCH,
    data:posts,
  };
}

export function addIncredients(posts) {
  return {
    type: ADD_INCREDIENTS,
    data:posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function getRecipe() {
  return (dispatch) => {
    return callApi('recipes').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

export function getIncredients() {
  return (dispatch) => {
    return callApi(`incredients`).then(res => dispatch(addIncredients(res)));
  };
}

export function getView() {
  return (dispatch) => {
    return callApi(`view`).then(res => dispatch(addView(res)));
  };
}

export function addView(posts) {
  return {
    type: ADD_VIEW,
    data:posts,
  };
}

export function getRecipes() {
  return (dispatch) => {
    return callApi(`recipes`).then(res => dispatch(addgetRecipes(res)));
  };
}

export function addgetRecipes(posts) {
  return {
    type: ADD_RECIPES,
    data:posts,
  };
}

export function search() {
  return (dispatch) => {
    return callApi(`search`).then(res => dispatch(addIncredients(res)));
  };
}

export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}

export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}
