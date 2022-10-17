import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { color } from "../utils/styles/colors";
import { container } from "../utils/styles/container";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div style={container}>
      <Fade>
        <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
          HERNANDO <span style={{ color: color.main[1] }}>TANDRA</span>
        </h1>
        <h4 style={{ color: color.bnw[2] }}>
          +62 81360841135 &emsp;{" "}
          <span style={{ color: color.main[1] }}>
            hernandotandra02@gmail.com
          </span>
        </h4>
        <p style={{ color: color.bnw[3] }}>
          I am a third-year student of Informatics Engineering major that is
          equipped with decent academic record and comprehensive computer
          programming-related skills. With almost 3 years experience as a sales
          admin, it has shaped me to possess the trait of thorough and
          detail-oriented. Having an interest in problem-solving and attractive
          display design, I am looking forward to dedicate in IT department job.
        </p>
        <br />
        <span>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="3x"
            style={{ paddingRight: "20px" }}
          />
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </span>
      </Fade>
    </div>
  );
};

export default About;
