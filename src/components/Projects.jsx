import "../styles/form.css"
import { useState } from "react";
import { ProjectsFields } from "./FormFields";

function ProjectsSection({ projectsInfo }) {
    return (
        <section className="projectsWrapper">
            {projectsInfo.map((entry, index) => {
                return (
                    <div 
                        className="projectEntry" 
                        id={"project" + index} 
                        key={"project" + index}
                    >
                        <div className="projectDetails">
                            <p><b>{entry.projectName}</b></p>
                            <p>{entry.startDate + " - " + entry.endDate}</p>
                        </div>
                        {
                            <ul>
                                {entry.descriptions.map((text, index) => {
                                    return (
                                        text && <li key={index}>{text}</li>
                                    )
                                })}
                            </ul>
                        }
                    </div>
                )
            })}
        </section>
    )
}

function Projects() {
    const [projectsInfo, setProjectsInfo] = useState([
        {
            id: 0,
            projectName: "Retaking Wall Maria",
            startDate: "846",
            endDate: "846",
            descriptions: ["Led 5+ survey corps regiments to regain Wall Maria from 200+ titans"],
        }
    ]);

    return (
        <>
            <h2>Projects</h2>
            <ProjectsFields />
            <ProjectsSection projectsInfo={projectsInfo}/>
        </>
    )
}

export default Projects;