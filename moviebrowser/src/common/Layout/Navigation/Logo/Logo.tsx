import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
function Logo() {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <span className={styles.logo}>MovieBrowser</span>
    </Link>
  );
}

export default Logo;
