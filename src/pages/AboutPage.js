import React, { Component , useState, useEffect} from "react";
import { Link , Outlet } from "react-router-dom";
import AboutCompanyPage from "./AboutCompanyPage";


// export default class AboutPage extends Component {
//   render() {
//     return (
//       <div className="about">
//         {/* <h1>AboutPage</h1>
//         <Link to={'about-company'}>About Company Page</Link>
//         <Outlet /> */}
//         <h1>About</h1>
//         <p>Hi, my name is O. Riastanjung, you can call me Orias, or Ori <br />
//         I am focusing on Frontend Developer using ReactJS tech <br />
//         Lets go, read more about me !!</p>
//       </div>
//     );
//   }
// }



export default function AboutPage() {

  return (
    <div className="about" id="about">
        {/* <h1>AboutPage</h1>
        <Link to={'about-company'}>About Company Page</Link>
        <Outlet /> */}
        <h1>About</h1>
        <p>Hi, my name is O. Riastanjung, you can call me Orias, or Ori <br />
        I am focusing on Frontend Developer using ReactJS tech <br />
        Lets go, read more about me !!</p>
      </div>
  )
}
