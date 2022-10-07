import { CssBaseline } from "@mui/material";
import Grid from "@mui/material/Grid";
import SideBar from "./component/SideBar";
import About from "./pages/about/About";
import Awards from "./pages/awards/Awards";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import Interest from "./pages/interest/Interest";
import Skills from "./pages/skills/Skills";

export default function App() {
  return (
    <div className="App">
      <CssBaseline>
        <Grid container spacing={2} sx={{
          minHeight: "100vh",
        }}>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={9}>
            <About/>
            <Experience/>
            <Education/>
            <Skills/>
            <Interest/>
            <Awards/>
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
}
