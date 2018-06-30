import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Header.css';

export function Header(props, context) {

  return (
    <div className={styles.header}>
      <div className={styles['language-switcher']}>
        <ul>


            <li> <Link to="/search" >Search</Link></li>
            <li> <Link to="/recipes" >recipes</Link></li>
            <li> <Link to="/view" >View</Link></li>
          </ul>
      </div>
      {/*<div className={styles.content}>*/}
        {/*<h1 className={styles['site-title']}>*/}
          {/*<Link to="/" ><FormattedMessage id="siteTitle" /></Link>*/}
        {/*</h1>*/}
        {/*<h1 className={styles['site-title']}>*/}
          {/*<Link to="/recipes" >Recipes</Link>*/}
        {/*</h1>*/}
        {/*{*/}
          {/*context.router.isActive('/', true)*/}
            {/*? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>*/}
            {/*: null*/}
        {/*}*/}
      {/*</div>*/}
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
