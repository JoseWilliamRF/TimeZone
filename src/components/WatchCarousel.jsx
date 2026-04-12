import React from 'react';
import styles from './Collection.module.css';
import { watchesData } from '../data/collectionsData';
import WatchCard from './WatchCard'; // Importa o novo componente isolado

function WatchCarousel({ activeIndex, nextWatch, prevWatch }) {
  return (
    <div className={styles.rightColumn}>
      <div className={styles.controls}>
        <button
          onClick={prevWatch}
          className={styles.arrowBtn}
          data-ga-category="Navegação"
          data-ga-action="clique_seta_esquerda"
          data-ga-label="Carrossel"
        >
          ←
        </button>
        <button
          onClick={nextWatch}
          className={styles.arrowBtn}
          data-ga-category="Navegação"
          data-ga-action="clique_seta_direita"
          data-ga-label="Carrossel"
        >
          →
        </button>
      </div>

      <div className={styles.carousel}>
        {watchesData.map((watch, index) => (
          <div
            key={watch.id}
            data-ga-category="Vitrine"
            data-ga-action="clique_ver_mais"
            data-ga-label={watch.brand}
          >
            {/* O WatchCard fica protegido aqui dentro, apenas com as coisas do React */}
            <WatchCard watch={watch} isSpotlight={index === activeIndex} />
          </div>
        ))}
      </div>

      <div className={styles.seeMoreWrapper}>
        <button
          className={styles.seeMoreBtn}
          data-ga-category="Vitrine"
          data-ga-action="clique_ver_mais"
          data-ga-label="Clicou Ver Mais"
        >
          Ver mais →
        </button>
      </div>
    </div>
  );
}

export default WatchCarousel;
