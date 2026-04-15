import React from 'react';
import styles from './LimitedEditions.module.css';
import { useFadeIn } from '../hooks/useFadeIn';
// IMPORTANTE: Ajuste o caminho e o nome do arquivo para a sua imagem real
import bgImage from '../assets/images/footer.png';

function LimitedEditions() {
  const sectionRef = useFadeIn();

  return (
    <section
      id="limited"
      ref={sectionRef}
      className={`${styles.limitedContainer} fade-in`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.topRightContent}>
        <p>
          Tenha um pedaço da história com nossos relógios de edição limitada,
          criados em pequenas quantidades e com materiais raros.
        </p>
      </div>

      <div className={styles.bottomLeftContent}>
        <h2>Edições Limitadas</h2>
        <p>
          Descubra o charme dos relógios vintage ou invista em peças seminovas
          que resistem ao teste do tempo.
        </p>
      </div>
    </section>
  );
}

export default LimitedEditions;
