import React from 'react';
import styles from './Collection.module.css';
import { brandsList, watchesData } from '../data/collectionsData';

function BrandFilter({ activeIndex }) {
  return (
    <div className={styles.leftColumn}>
      <h2 className={styles.sectionTitle}>
        Nova <br /> Coleção
      </h2>
      <ul className={styles.brandFilter}>
        {brandsList.map((brandName, index) => {
          const isSynced = watchesData[activeIndex].brand === brandName;
          return (
            <li key={index} className={isSynced ? styles.activeBrand : ''}>
              {brandName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BrandFilter;
