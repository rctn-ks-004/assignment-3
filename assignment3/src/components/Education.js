import { color } from "../utils/styles/colors";

const Education = ({ education }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ flex: "50%", marginBottom: "0px" }}>{education.place}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <p style={{ color: color.main[1], flex: "50%", marginBottom: "0px" }}>
            {education.date}
          </p>
        </div>
      </div>
      <h3 style={{ color: color.bnw[2] }}>{education.field}</h3>
    </div>
  );
};

export default Education;
