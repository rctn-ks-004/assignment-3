import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { color } from "../utils/styles/colors";

const Award = ({ award }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", color: color.bnw[2] }}>
      <FontAwesomeIcon
        icon={faTrophy}
        style={{ padding: "20px" }}
        size="2x"
        color="gold"
      />
      <h3>{award}</h3>
    </div>
  );
};

export default Award;
