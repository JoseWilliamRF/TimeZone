import React from 'react';
import styles from './Hero.module.css';
import TransparentgiantWatch from '../assets/images/relogio-transparente.png';

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.backgroundLayer}></div>
      <div className={styles.contentLayer}>
        <img
          src={TransparentgiantWatch}
          alt="background"
          className={styles.mainWatchImage}
        />
        <h1 className={styles.heroTitle}>
          Descubra a Elegância Atempora <br />
          com a Timezone
        </h1>
        <p className={styles.heroDescription}>
          Acreditamos que cada segundo conta. Nossa coleção cuidadosamente
          selecionada de relógios de luxo e para o dia a dia oferece mais do que
          apenas uma maneira de marcar o tempo — eles refletem seu estilo,
          precisão e requinte.
        </p>
      </div>

      <div className={styles.actionButtons}>
        <button className={styles.primaryBtn}>Compre Agora</button>
        <button className={styles.secondaryBtn}>Nova Coleção</button>
      </div>
    </section>
  );
}

export default Hero;
