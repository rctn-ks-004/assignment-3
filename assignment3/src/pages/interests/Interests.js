import React from "react";
import { styles } from "./styles"

export class Interests extends React.Component {
  render() {
    return (
      <div className={styles.section()} id="interests">
        <div className={styles.title()}>Interests</div>
        <div className={styles.content()}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra sollicitudin augue, mollis rutrum lorem tincidunt nec. Pellentesque sollicitudin in sem facilisis hendrerit. Nulla ac arcu tempus, vehicula mi a, iaculis neque. Sed mattis mi in pulvinar dignissim. Etiam finibus justo ut mi maximus commodo.
        </div>
      </div>
    );
  }
}