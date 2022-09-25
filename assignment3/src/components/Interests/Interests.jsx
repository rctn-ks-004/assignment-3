import * as React from "react";
import { css } from "../../styles/styles";
import Title from "../widgets/Title";
export default function Interests() {
  const name = "Interests";
  const interests = [
    `Apart from being a full stack engineer, I enjoy most of my time being outdoors. 
    During the weekend, I enjoy playing badminton with my friends`,
    `When forced indoors, I follow a number of fantasy genre anime, and I sepnd a large 
    amount of my free time exploring the latest technology advancements in the front-end web development
    and back-end web devlopment world, I also like to read books`,
  ];

  return (
    <section id="interests">
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
                  textAlign: "left",
                }}
              >
                {interests.map((item, idx) => (
                  <>
                    {idx !== 0 && <div className={styles.mt20()} />}
                    <div className={styles.desc()}>{item}</div>
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
  mt20: css({
    marginTop: 20,
  }),
  desc: css({
    fontSize: 18,
    fontWeight: "600",
  }),
};
