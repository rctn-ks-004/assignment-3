import * as React from "react";
import { css } from "../../styles/styles";
export default function Awards() {
  return (
    <section id="awards">
      <div className={styles.container()}></div>
    </section>
  );
}

const styles = {
  container: css({
    // eslint-disable-next-line no-restricted-globals
    height: screen.height,
    backgroundColor: "green",
  }),
};
