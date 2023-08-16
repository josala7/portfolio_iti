import React from "react";
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footer_style}>
      <button className={styles.b1}>contact us</button>
      <button className={styles.b2}><a href="https://www.facebook.com">facebook</a></button>
      <button className={styles.b3}><a href="https://www.linkedin.com">linkedin</a></button>
      <button className={styles.b4}><a href="https://www.github.com">Github</a></button>
      <button className={styles.b5}><a href="mailto:joosala4@gmail.com">Gmail</a></button>
      <p>Thanks for visiting my portfolio</p>
    </div>
  );
}

export default Footer;
