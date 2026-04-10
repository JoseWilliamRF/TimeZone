import React from 'react';
import styles from './Collection.module.css';

import hublotLogo from '../assets/icons/hublot.svg';
import patekLogo from '../assets/icons/patekphillipe.svg';
import rolexLogo from '../assets/icons/rolex.svg';
import audemarsLogo from '../assets/icons/audemars.svg';
import omegaLogo from '../assets/icons/omega.svg';

function TopLogos() {
  return (
    <div className={styles.topBar}>
      <p className={styles.supportedText}>SUPPORTED BRAND</p>
      <div className={styles.logosRow}>
        <img src={hublotLogo} alt="Hublot" />
        <img src={patekLogo} alt="Patek Philippe" />
        <img src={rolexLogo} alt="Rolex" />
        <img src={audemarsLogo} alt="Audemars Piguet" />
        <img src={omegaLogo} alt="Omega" />
      </div>
    </div>
  );
}

export default TopLogos;
