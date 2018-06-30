import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import styles from './Header.css';

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
        <img className={styles.recipeProgress} src="https://lh5.googleusercontent.com/diYya4SVCDy-5PLf5cmUasZ99I9HQXc_wmGYvuGHhrSQGFtdtnbyDGa0HrIUyPz7mcOpkKqenJUd6pcH0XiL=w2560-h1270-rw" />
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
