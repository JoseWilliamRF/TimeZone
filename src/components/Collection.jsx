import React, { useState, useEffect, useRef } from 'react';
import styles from './Collection.module.css';
import { watchesData } from '../data/collectionsData';

// IMPORTANDO OS NOVOS COMPONENTES FILHOS
import TopLogos from './TopLogos';
import BrandFilter from './BrandFilter';
import WatchCarousel from './WatchCarousel';

function Collection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  // A Inteligência do Fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // A Inteligência das Setas
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
