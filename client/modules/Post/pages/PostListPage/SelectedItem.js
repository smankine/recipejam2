import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Header.css';


function SelectedItem(props) {

  function selectItem(e, item){


    console.log("click")
    //  selected.push (item)
    props.deselecteItem(props.post)
  }


  if(props.post){
    return (
      <div  className={styles.selectedIncredientTableCelle} >

        <img  className={styles.ingredientPicture22} src={props.post.picture}  />
        <div className="removeButton" onClick={(e) => selectItem(e)} >X</div>
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



export default SelectedItem;
