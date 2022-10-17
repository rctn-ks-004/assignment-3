import { container } from "../utils/styles/container";
import Title from "../components/Title";
import Education from "../components/Education";
import { getEducations } from "../utils/datas/getEducations";
import { Bounce } from "react-awesome-reveal";

const Educations = () => {
  const educations = getEducations();

  return (
    <div style={container}>
      <Bounce>
        <Title title="EDUCATION" />
        {educations.map((education, i) => (
          <Education education={education} key={i} />
        ))}
      </Bounce>
    </div>
  );
};

export default Educations;
