import { css } from "../../styles/styles";

export default function CardAward(props) {
  const { award } = props;

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
          <div
            className={styles.title()}
          >{`${award.title} (${award.type})`}</div>
          <div className={styles.issued()}>{award.issued}</div>
        </div>
        <div className={styles.date()}>{award.date}</div>
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
    fontSize: 20,
  }),
  date: css({
    fontSize: 18,
    fontWeight: "400",
    color: "#E2A089",
  }),
  issued: css({
    fontSize: 16,
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
