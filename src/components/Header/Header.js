'use client';

import Link from "next/link"
import React, { useState } from 'react';
import styles from "./Header.module.css";
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Image className={styles.img} src="/images/olivia123.jpg" alt="Logo"  width={70} height={100}/>
        <h1 className={styles.h2}>Olivia Rodrigo</h1>
      </div>

      {isMenuOpen &&
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.lista}>
            <li>
              <Link className={styles.link} href='/'>Home</Link>
            </li>

            <li>
              <Link className={styles.link} href="/sobre">Sobre</Link>
            </li>

            <li>
              <Link className={styles.link} href="/contatos">Contato</Link>
            </li>
          </ul>
        </nav>
      }
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? 'Fechar' : 'Menu'}
      </button>
    </header>
  );
};

export default Header;


/*export default function Header(){
    return(
        <header>
            <nav className={styles.nav}>
                <ul className={styles.lista}>
                    <li>
                        <Link className={styles.link} href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={styles.link} href="/sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}*/

/*gfvrfvgyhjg5ffvb*/

