import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

function SelectedItem(props) {

  function selectItem(e, item){


    console.log("click")
    //  selected.push (item)
    props.deselecteItem(props.post)
  }


  if(props.post){
    return (
      <div class="selectedIncredientTableCelle">

        <img  class="selectedItemPicture" src={props.post.picture}  />
        <div class="removeButton" onClick={(e) => selectItem(e)} >Remove</div>
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
