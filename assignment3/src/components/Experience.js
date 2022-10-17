import { color } from "../utils/styles/colors";

const Experience = ({ experience }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ flex: "50%", marginBottom: "0px" }}>{experience.place}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <p style={{ color: color.main[1], flex: "50%", marginBottom: "0px" }}>
            {experience.date}
          </p>
        </div>
      </div>
      <h3 style={{ color: color.bnw[2] }}>{experience.position}</h3>
      <p style={{ color: color.bnw[3] }}>{experience.jobdesc}</p>
    </div>
  );
};

export default Experience;
