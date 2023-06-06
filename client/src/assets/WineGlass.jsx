import React from 'react';

import styles from './WineGlass.module.scss';
import WineSwirl from './WineGlass.gif';

function WineGlass() {
  return (
    <div className={styles.container}>
      <img
        src={WineSwirl}
        alt='loading...'
        style={{ height: '480px', width: '640px' }}
      />
    </div>
  );
}

export default WineGlass;
