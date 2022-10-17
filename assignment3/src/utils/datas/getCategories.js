import About from "../../pages/About";
import Experiences from "../../pages/Experiences";
import Educations from "../../pages/Educations";
import Skills from "../../pages/Skills";
import Interets from "../../pages/Interests";
import Awards from "../../pages/Awards";

let categories = [
  {
    id: 1,
    name: "about",
    route: <About />,
  },
  {
    id: 2,
    name: "experience",
    route: <Experiences />,
  },
  {
    id: 3,
    name: "education",
    route: <Educations />,
  },
  {
    id: 4,
    name: "skills",
    route: <Skills />,
  },
  {
    id: 5,
    name: "interests",
    route: <Interets />,
  },
  {
    id: 6,
    name: "awards",
    route: <Awards />,
  },
];

export function getCategories() {
  return categories;
}
