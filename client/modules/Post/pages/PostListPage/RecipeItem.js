import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import styles from './Header.css';
import img1 from './matchBar4_preview.png';
function RecipeItem(props) {

  function selectItem(e, item){
    console.log("click")
    //  selected.push (item)
    props.selectItem(props.post)
  }


  if(props.post){
    return (
      <div  className={styles.recipeItem}>
        <div className={styles.recipeTitle}>{props.post.recipeName}</div>
        <div className={styles.recipeSubTitle}>{props.post.sourceDisplayName}</div>
        <img className={styles.recipeImage} src={props.post.imageUrlsBySize['90']}  />
        <img className={styles.recipeProgress} src={img1} />
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
