import { css } from "../../styles/styles";

export default function Title(props) {
  const { name } = props;
  return <div className={styles.title()}>{name}</div>;
}

const styles = {
  title: css({
    fontSize: 40,
    color: "Black",
    fontWeight: "bold",
  }),
};
