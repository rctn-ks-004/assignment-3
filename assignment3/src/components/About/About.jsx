import * as React from "react";
import { css } from "../../styles/styles";
import Title from "../widgets/Title";
export default function About() {
  const name = "James Kirawan";
  return (
    <section id="about">
      <div className={styles.container()}>
        <div className={styles.rowBetween()}>
          <div className={styles.flexStart()}>
            <div className={styles.column()}>
              <Title name={name} />
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: "blue" }}>
            <Title name={name} />
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: css({
    // eslint-disable-next-line no-restricted-globals
    height: screen.height,
    flex: 1,
    display: "flex",
    borderBottom: "1px solid lightgray",
  }),
  rowBetween: css({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  }),
  flexStart: css({
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
  }),
  column: css({
    display: "flex",
    flexDirection: "column",
  }),
};
