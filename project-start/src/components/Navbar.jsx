import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}> 
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link to="/" className={styles.navbarLink}>Home</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/explore" className={styles.navbarLink}>Explore</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/login" className={styles.navbarLink}>Login</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link to="/signup" className={styles.navbarLink}>SignUp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
