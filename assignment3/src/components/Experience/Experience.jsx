import * as React from "react";
import { css } from "../../styles/styles";
import Title from "../widgets/Title";
import CardExperience from "./CardExperience";
export default function Experience() {
  const name = "Experience";
  const jobs = [
    {
      company: "PT. Dermaga Sukses Mandiri",
      title: "Admin",
      desc: [
        "Entered and maintained departmental records in company database",
        "Managed payroll, transactions, invoicing and budgeting to decrease financial inconsitencies",
      ],

      date: "2020 - 2021",
    },
    {
      company: "Springkraf",
      title: "Full Stack Engineer",
      desc: [
        "Paired with fellow engineers to brainstorm ideas, debug problems and review code.",
        "Performed development, debugging, optimization and automation to support implementation of products and applications",
        "Worked with customers to define requirements and troubleshoot issues and architected and implemented new engineering applications to meet needs",
      ],
      date: "2021 - present",
    },
  ];
  return (
    <section id="experience">
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
                {jobs.map((job, idx) => (
                  <React.Fragment key={idx}>
                    {idx !== 0 && <div className={styles.mt80()} />}
                    <CardExperience job={job} />
                  </React.Fragment>
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
