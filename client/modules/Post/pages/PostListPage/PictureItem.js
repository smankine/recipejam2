import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from '../../components/PostListItem/PostListItem.css';

function PictureItem(props) {

  if(props.post){
    return (
      <div className={styles['single-post']}>
        {props.post.name}
        <img src={props.post.picture}/>

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
