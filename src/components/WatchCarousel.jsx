import React from 'react';
import styles from './Collection.module.css';
import { watchesData } from '../data/collectionsData';
import WatchCard from './WatchCard'; // Importa o novo componente isolado

function WatchCarousel({ activeIndex, nextWatch, prevWatch }) {
  return (
    <div className={styles.rightColumn}>
      <div className={styles.controls}>
        <button onClick={prevWatch} className={styles.arrowBtn}>
          ←
        </button>
        <button onClick={nextWatch} className={styles.arrowBtn}>
          →
        </button>
      </div>

      <div className={styles.carousel}>
        {watchesData.map((watch, index) => (
          <WatchCard
            key={watch.id}
            watch={watch}
            isSpotlight={index === activeIndex}
          />
        ))}
      </div>

      <div className={styles.seeMoreWrapper}>
        <button className={styles.seeMoreBtn}>Ver mais →</button>
      </div>
    </div>
  );
}

export default WatchCarousel;
