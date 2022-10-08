import React from "react";
import { styles } from "./styles"

export class Skills extends React.Component {
  render() {
    return (
      <div className={styles.section()} id="skills">
        <div className={styles.title()}>Skills</div>
        <div className={styles.secTitle()}>Programming Languages and Tools</div>
        <div className={styles.body()}>
          <ul className={styles.listItem()}>
            <li className={styles.eachList()}>Java</li>
            <li className={styles.eachList()}>Python</li>
            <li className={styles.eachList()}>Dart</li>
          </ul>
          <ul className={styles.listItem()}>
            <li className={styles.eachList()}>Springboot</li>
            <li className={styles.eachList()}>Django</li>
            <li className={styles.eachList()}>NodeJS</li>
          </ul>
          <ul className={styles.listItem()}>
            <li className={styles.eachList()}>Git</li>
            <li className={styles.eachList()}>Postman</li>
            <li className={styles.eachList()}>PostgreSQL</li>
          </ul>
        </div>
        
      </div>
    );
  }
}