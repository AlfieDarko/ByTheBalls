import React from 'react';
import cx from 'classnames';
import WebFont from 'webfontloader';
import styles from '../../styles/main.less';

WebFont.load({
  google: {
    families: [
      'Istok Web',
      'sans-serif',
      'Holtwood One SC',
      'Abel',
      'Roboto Condensed',
    ],
  },
});

let iClassName = cx({
  fa: true,
  'fa-start': true,
});
const Header = () => (
  <React.Fragment>
    <header className={styles.hero}>
      <div className={styles['hero-wrap']}>
        <p className={styles.intro} id={styles.intro}>
          PACKETPING.IO
        </p>
        <h1 id={styles.headline}>Tournament</h1>
        <p className={styles.year}>
          <i className={iClassName} /> 2018 <i className={iClassName} />
        </p>
        <p> MAY THE BEST HANDS WIN </p>
      </div>
    </header>
  </React.Fragment>
);

export default Header;
