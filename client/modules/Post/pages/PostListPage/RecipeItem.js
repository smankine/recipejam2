import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

function RecipeItem(props) {

  function selectItem(e, item){
    console.log("click")
    //  selected.push (item)
    props.selectItem(props.post)
  }


  if(props.post){
    return (
      <div className="recipeItem">
        <div className="recipeTitle">{props.post.recipeName}</div>
        <div className="recipeTitleDisplay">{props.post.sourceDisplayName}</div>
        <img  className="selectedItemPicture" src={props.post.imageUrlsBySize['90']}  />

      </div>
    );
  }else{
    return (
      <div className={styles['single-post']}>
       No data
      </div>
    );
  }

}



export default RecipeItem;
