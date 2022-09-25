import * as React from "react";
import { css } from "../../styles/styles";
import Title from "../widgets/Title";
import CardAward from "./CardAward";
export default function Awards() {
  const name = "Awards";
  const awards = [
    {
      title: "Finalist of IFEST#10",
      type: "Competitive Programming",
      date: "2022",
      issued: "Universitas Atma Jaya Yogyakarta, May 2022",
    },
    {
      title: "Finalist on The 2021 ACM - ICPC Asia - Jakarta Regional Contest",
      type: "Competitive Programming",
      date: "2021",
      issued: "Bina Nusantara University, Nov 2021",
    },
    {
      title: "Finalist on The 2020 ACM - ICPC Asia - Jakarta Regional Contest",
      type: "Competitive Programming",
      date: "2020",
      issued: "Bina Nusantara University, Dec 2020",
    },
    {
      title: "Finalist on The Falcon Project 10",
      type: "Competitive Programming",
      date: "2020",
      issued: "Universitas Pelita Harapan, Dec 2020",
    },
    {
      title: "MPC Online Contest Rank 1",
      type: "Competitive Programming",
      date: "2020",
      issued: "Universitas Mikroskil, Dec 2020",
    },
  ];
  return (
    <section id="awards">
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
                <ul>
                  {awards.map((award, idx) => (
                    <li style={{ marginTop: idx !== 0 ? 25 : 0 }}>
                      <CardAward award={award} />
                    </li>
                  ))}
                </ul>
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
  mt20: css({
    marginTop: 20,
  }),
};
