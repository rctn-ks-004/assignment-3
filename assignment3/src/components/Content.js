// import About from "../pages/About";
// import Experiences from "../pages/Experiences";
// import Educations from "../pages/Educations";
// import Skills from "../pages/Skills";
// import Interests from "../pages/Interests";
// import Awards from "../pages/Awards";
// import { Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import { color } from "../utils/styles/colors";

const Content = ({ categories }) => {
  return (
    <div style={styles.container}>
      {/* <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experiences />} />
        <Route path="/education" element={<Educations />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/awards" element={<Awards />} />
      </Routes> */}
      {categories.map((category) => (
        <Element className={category.id} name={category.id.toString()} key={category.id}>
          {category.route}
        </Element>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    backgroundColor: color.main[2],
    padding: "0 5% 0 25%",
  },
};

export default Content;
