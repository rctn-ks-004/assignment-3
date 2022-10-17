import Title from "../components/Title";
import { color } from "../utils/styles/colors";
import { container } from "../utils/styles/container";
import { Rotate } from "react-awesome-reveal";

const Interests = () => {
  return (
    <div style={container}>
      <Rotate>
        <Title title="INTEREST" />
        <p style={{ color: color.bnw[3] }}>
          I am interested in things related to logic because when we solve the
          problem, we will get a feeling that cannot be said. For example, such
          as math problems and questions from psychological tests. In other
          words it's all about problem solving.
        </p>
        <p style={{ color: color.bnw[3], margin: "0px" }}>
          Recently, I have found something that can interest me, which is to see
          an attractive design. I hope that in the future I can create designs
          that can attract the attention of others as well.
        </p>
      </Rotate>
    </div>
  );
};

export default Interests;
