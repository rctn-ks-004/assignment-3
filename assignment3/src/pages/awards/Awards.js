import React from "react";
import { styles } from "./styles"

export class Awards extends React.Component {
  render() {
    return (
      <div className={styles.section()} id="awards">
        <div className={styles.title()}>Awards</div>
        <ul className={styles.content()}>
          <li>Silver Medalist of FLS2N Solo Guitar in Aceh 2018</li>
        </ul>
      </div>
    );
  }
}