import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
// Import Style
import styles from './Header.css';


function PictureItem(props) {

  function selectItem(e, item){
    console.log("click")
    //  selected.push (item)
    props.selectItem(props.post)
  }


  if(props.post){
    return (
      <div  className={styles.incredientTableCell}>
        <div  className={styles.picContainer}>
          <label   className={styles.picContainerBottomLeft}>{props.post.name}</label>
          <img src={props.post.picture} onClick={(e) => selectItem(e)}  className={styles.ingredientPicture}/>
          </div>
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



export default PictureItem;
