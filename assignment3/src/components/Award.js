import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { color } from "../utils/styles/colors";

const Award = ({ award }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", color: color.bnw[2] }}>
      <FontAwesomeIcon
        icon={faTrophy}
        style={{ padding: "20px" }}
        size="3x"
        color="gold"
      />
      <div>
        <h3 style={{ margin: "0px" }}>{award.name}</h3>
        <div style={{ display: "flex" }}>
          <p style={{ margin: "0px" }}>{award.from} &emsp;</p>
          <a
            href={award.link}
            style={{ color: color.main[1], textDecoration: "none" }}
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Award;
