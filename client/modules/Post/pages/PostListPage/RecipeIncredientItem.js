import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

function RecipeIncredientItem(props) {

  function selectItem(e, item){
    console.log("click")
    //  selected.push (item)
    // props.selectItem(props.post)
  }


  if(props.post){
    return (
      <div className="incredientTableCell">
        <label>{props.post.name}</label>
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



export default RecipeIncredientItem;
