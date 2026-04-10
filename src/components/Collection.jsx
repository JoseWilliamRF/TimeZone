import React, { useState } from 'react';
import styles from './Collection.module.css';
import { watchesData } from '../data/collectionsData';

// IMPORTANDO OS NOVOS COMPONENTES FILHOS
import TopLogos from './TopLogos';
import BrandFilter from './BrandFilter';
import WatchCarousel from './WatchCarousel';
import { useFadeIn } from '../hooks/useFadeIn';

function Collection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useFadeIn();

  const nextWatch = () => {
    if (activeIndex < watchesData.length - 1) setActiveIndex(activeIndex + 1);
  };
  const prevWatch = () => {
    if (activeIndex > 0) setActiveIndex(activeIndex - 1);
  };

  // O ESQUELETO MESTRE
  return (
    <section
      id="shop"
      ref={sectionRef}
      className={`${styles.collectionContainer} fade-in`}
    >
      <TopLogos />

      <div className={styles.mainContent}>
        <BrandFilter activeIndex={activeIndex} />

        <WatchCarousel
          activeIndex={activeIndex}
          nextWatch={nextWatch}
          prevWatch={prevWatch}
        />
      </div>
    </section>
  );
}

export default Collection;
