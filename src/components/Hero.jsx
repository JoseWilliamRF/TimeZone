import React from 'react';
import styles from './Hero.module.css';
import TransparentgiantWatch from '../assets/images/relogio-transparente.png';
import BgVideo from '../assets/images/background2.mp4';

function Hero() {
  return (
    <section id="home" className={styles.heroContainer}>
      <video
        className={styles.backgroundLayer}
        src={BgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <img
        src={TransparentgiantWatch}
        alt="Relógio Exclusivo Timezone"
        className={styles.mainWatchImage}
      />

      <div className={styles.contentLayer}>
        <h1 className={styles.heroTitle}>
          Descubra a Elegância Atemporal <br />
          com a Timezone
        </h1>
        <p className={styles.heroDescription}>
          Acreditamos que cada segundo conta. Nossa coleção cuidadosamente
          selecionada de relógios de luxo e para o dia a dia oferece mais do que
          apenas uma maneira de marcar o tempo — eles refletem seu estilo,
          precisão e requinte.
        </p>

        <div className={styles.actionButtons}>
          <button className={styles.primaryBtn}>Compre Agora</button>
          <button className={styles.secondaryBtn}>Nova Coleção</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
