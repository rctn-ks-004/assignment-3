import * as React from "react";
import { css } from "../../styles/styles";
import Title from "../widgets/Title";
export default function About() {
  const name = "James Kirawan";
  const desc =
    "An ongoing bachelor who like to code, with high enthusiast in seeking new challenges and technologies ";
  return (
    <section id="about">
      <div className={styles.container()}>
        <div className={styles.rowBetween()}>
          <div className={styles.flexStart()}>
            <div className={styles.column()}>
              <Title name={name} />
              {desc}
            </div>
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
    marginLeft: 60,
    flexDirection: "column",
    marginBottom: 100,
    justifyContent: "center",
    alignItems: "flex-start",
  }),
};
