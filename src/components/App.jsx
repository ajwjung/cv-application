import "../styles/App.css"
import GeneralFields from "../components/General.jsx"
import EducationFields from "./Education.jsx"
import ExperienceFields from "./Experience.jsx"
import ProjectFields from "./Projects.jsx"
import SkillsFields from "./Skills.jsx"

function App() {
  return (
    <>
      <p>General Information</p>
      <GeneralFields />
      <p>Education</p>
      <EducationFields />
      <p>Work Experience</p>
      <ExperienceFields />
      <p>Projects (optional)</p>
      <ProjectFields />
      <p>Technical Skills</p>
      <SkillsFields />
    </>
  )
}

export default App
