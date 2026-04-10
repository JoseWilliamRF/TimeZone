import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

import search from '../assets/icons/search-01.svg';
import cart from '../assets/icons/shopping-cart-01.svg';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <span className={styles.time}>Time</span>
        <span className={styles.zone}>Zone</span>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={styles.iconsGroup}>
        <span className={styles.icon}>
          <img src={search} alt="Pesquisa" />
        </span>
        <span className={styles.icon}>
          <img src={cart} alt="Carrinho" />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
