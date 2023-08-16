import React from "react";
import styles from './skills.module.css';

function Skills() {
  return (
    <div className={styles.skills_style}>
      <h1>Skills</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        Laboriosam omnis nesciunt itaque necessitatibus neque magni dicta saepe quos,
        autem molestiae vel earum,
        tempore aliquam amet eveniet maiores tenetur nulla libero!
      </p>

      <caption>Here are some points about my skills</caption>
      <ul>
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>JS</li>
        <li>Angular</li>
      </ul>
    </div>
  );
}

export default Skills;
