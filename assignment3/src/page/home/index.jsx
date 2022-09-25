import { About, Awards, Education, Experience, Interest, Skill } from ".."
const index = () => {
  return (
    <>
      <About id="about"/>
      <Awards id="awards"/>
      <Education id="education"/>
      <Experience id={"experience"}/>
      <Interest id="interest"/>
      <Skill id="skills"/>
    </>
  )
}

export default index