import Skill from "../components/Skill";
import Title from "../components/Title";
import { getSkills } from "../utils/datas/getSkills";
import { container } from "../utils/styles/container";
import { JackInTheBox } from "react-awesome-reveal";

const Skills = () => {
  const skills = getSkills();

  return (
    <div style={container}>
      <JackInTheBox>
        <Title title="SKILLS" />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {skills.map((skill, i) => (
            <Skill skill={skill} key={i} />
          ))}
        </div>
      </JackInTheBox>
    </div>
  );
};

export default Skills;
