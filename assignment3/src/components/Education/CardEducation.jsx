import { css } from "../../styles/styles";

export default function CardEducation(props) {
  const { education } = props;

  return (
    <div className={styles.container()}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div className={styles.title()}>{education.title}</div>
          <div className={styles.company()}>{education.university}</div>
        </div>
        <div className={styles.date()}>{education.date}</div>
      </div>
    </div>
  );
}

const styles = {
  container: css({
    display: "flex",
    flex: 1,
    flexDirection: "column",
  }),
  title: css({
    fontWeight: "bold",
    fontSize: 24,
  }),
  date: css({
    fontSize: 18,
    fontWeight: "400",
    color: "#E2A089",
  }),
  company: css({
    fontSize: 18,
    fontWeight: "700",
    color: "#828282",
  }),
  desc: css({
    textAlign: "left",
    marginTop: 12,
    fontWeight: "400",
    fontSize: 16,
  }),
};
