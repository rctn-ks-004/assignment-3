import { container } from "../utils/styles/container";
import { getAwards } from "../utils/datas/getAwards";
import Award from "../components/Award";
import Title from "../components/Title";
import { Flip } from "react-awesome-reveal";

const Awards = () => {
  const awards = getAwards();

  return (
    <div style={container}>
      <Flip>
        <Title title="AWARDS &#38; CERTIFICATION" />
        {awards.map((award, i) => (
          <Award award={award} key={i} />
        ))}
      </Flip>
    </div>
  );
};

export default Awards;
