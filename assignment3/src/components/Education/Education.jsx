import * as React from "react";
import { css } from "../../styles/styles";
import Title from "../widgets/Title";
import CardEducation from "./CardEducation";
export default function Education() {
  const name = "Education";
  const educations = [
    {
      title: "Technology Bachelor",
      date: "2019 - present",
      university: "University Mikroskil",
    },
  ];
  return (
    <section id="education">
      <div className={styles.container()}>
        <div className={styles.rowBetween()}>
          <div className={styles.flexStart()}>
            <div className={styles.column()}>
              <Title name={name} />
              <div
                style={{
                  marginTop: 40,
                  display: "flex",
                  // flex: 1,
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {educations.map((education, idx) => (
                  <>
                    {idx !== 0 && <div className={styles.mt80()} />}
                    <CardEducation education={education} />
                  </>
                ))}
              </div>
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
    marginRight: 60,
    flexDirection: "column",
    marginTop: 100,
    alignItems: "flex-start",
    width: "100%",
  }),
  mt80: css({
    marginTop: 80,
  }),
};
