import React from "react";
import styles from './about.module.css';

function About() {
  return (
    <div className={styles.aboutstyle}>
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        In ad aliquid nobis laudantium debitis,
        <br />
        maxime est blanditiis aut mollitia dolores aspernatur?
        <br />
        Consequuntur maxime perspiciatis eum ratione cum architecto tenetur ex.
      </p>
      <button>Download CV</button>
    </div>
  );
}

export default About;
