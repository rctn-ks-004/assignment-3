import { css } from "../../styles/styles";

export default function SkillCard(props) {
  const { skill } = props;

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
          <div className={styles.title()}>{skill.title}</div>
        </div>
      </div>
      <div>
        <ul>
          {skill.desc.map((item) => (
            <li className={styles.desc()}>{item}</li>
          ))}
        </ul>
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
    color: "#828282",
  }),
  desc: css({
    textAlign: "left",
    marginTop: 12,
    fontWeight: "400",
    fontSize: 16,
  }),
};
