
import { useState } from 'react';

import styles from './Nav.module.css';

import logo from '../images/logo.svg';
import iconHamburger from '../images/icon-hamburger.svg';

const Nav = () => {

  let [mobileMenu, setMobileMenu] = useState(false);

  let handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  let mobileMenuStyle = mobileMenu ? styles.showMobileMenu : "";

  return (
    <div className={styles.nav}>
      <div className={styles.navGroup}>
        <img src={logo} alt="sunnyside" className={styles.logo} />
        <img
          src={iconHamburger}
          alt="menu"
          className={styles.hamburger}
          onClick={handleMobileMenu}
        />

        <ul className={`${styles.navButtons} ${mobileMenuStyle}`}>
          <div className={styles.triangle} />
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#" className={styles.contact}>CONTACT</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Nav;