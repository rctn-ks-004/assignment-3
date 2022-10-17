import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { color } from "../utils/styles/colors";

const Skill = ({ skill }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" , flex: '50%', color: color.bnw[2]}}>
      <FontAwesomeIcon
        icon={faSquareCheck}
        style={{ padding: "20px" }}
        size="2x"
        color="green"
      />
      <h3>{skill}</h3>
    </div>
  );
};

export default Skill;
