import React, { useRef } from 'react';
import styles from './Collection.module.css';

function WatchCard({ watch, isSpotlight }) {
  // A ARMA SECRETA: useRef permite alterar a carta sem re-renderizar o React
  const cardRef = useRef(null);

  const handleMouseMove = e => {
    // Se não for a carta ativa ou a referência falhar, aborta instantaneamente
    if (!isSpotlight || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    // requestAnimationFrame sincroniza a matemática com a taxa de atualização do monitor (60hz/120hz)
    requestAnimationFrame(() => {
      cardRef.current.style.transform = `perspective(1000px) scale(1.1) translateY(-25px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  };

  const handleMouseLeave = () => {
    if (!isSpotlight || !cardRef.current) return;

    // Limpa o estilo injetado para o CSS original do modulo assumir suavemente
    requestAnimationFrame(() => {
      cardRef.current.style.transform = '';
    });
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.watchCard} ${isSpotlight ? styles.spotlight : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={watch.image} alt={watch.brand} className={styles.watchImage} />
      <h3 className={styles.watchName}>{watch.brand}</h3>
    </div>
  );
}

export default WatchCard;
