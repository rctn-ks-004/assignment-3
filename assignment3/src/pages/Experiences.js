import { container } from "../utils/styles/container";
import Title from "../components/Title";
import Experience from "../components/Experience";
import { getExperiences } from "../utils/datas/getExperiences";
import { Zoom } from "react-awesome-reveal";

const Experiences = () => {
  const experiences = getExperiences();

  return (
    <div style={container}>
      <Zoom>
        <Title title="EXPERIENCE" />
        {experiences.map((experience, i) => (
          <Experience experience={experience} key={i} />
        ))}
      </Zoom>
    </div>
  );
};

export default Experiences;
