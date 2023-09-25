import "../styles/form.css"
import { useState } from "react";
import { ProjectsFields } from "./FormFields";

function ProjectsSection({ projectsInfo, handleMouseEnter, handleMouseLeave, buttonHoverStyle, entryHoverStyle }) {
    return (
        <section className="projectsWrapper">
            {projectsInfo.map((entry, index) => {
                return (
                    <div 
                        className="projectEntry" 
                        onMouseEnter={(e) => {
                            const hoveredEntryId = e.target.closest(".projectEntry").id.slice(-1);
                            handleMouseEnter(Number(hoveredEntryId));
                        }} 
                        onMouseLeave={(e) => {
                            const hoveredEntryId = e.target.closest(".projectEntry").id.slice(-1);
                            handleMouseLeave(Number(hoveredEntryId));
                        }}
                        id={"project" + index} 
                        key={"project" + index}
                    >
                        <div 
                            className="projectDetails"
                            style={entryHoverStyle[index]}
                        >
                            <p><b>{entry.projectName}</b></p>
                            <p>{entry.startDate + " - " + entry.endDate}</p>
                        </div>
                        {
                            <ul style={entryHoverStyle[index]}>
                                {entry.descriptions.map((text, index) => {
                                    return (
                                        text && <li key={index}>{text}</li>
                                    )
                                })}
                            </ul>
                        }
                        <div className="btns" style={buttonHoverStyle[index]}>
                            <button
                                className="editInfo"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                style={{margin: "10px"}}
                                type="button"
                            >
                                Edit
                            </button>
                            <button
                                className="deleteInfo"
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                                style={{margin: "10px"}}
                                type="button"
                            >
                                Delete
                            </button>
                        </div>
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
    const [buttonHoverStyle, setButtonHoverStyle] = useState([{ display: "none" }]);
    const [entryHoverStyle, setEntryHoverStyle] = useState([{}]);

    function handleMouseEnterProject(entryId) {
        setButtonHoverStyle(
            buttonHoverStyle.map((buttonStyle, index) => {
                if (index === entryId) {
                    return ({ display: "block" });
                } else {
                    return buttonStyle;
                }
            })
        );
        setEntryHoverStyle(
            entryHoverStyle.map((entryStyle, index) => {
                if (index === entryId) {
                    return ({ opacity: "50%" });
                } else {
                    return entryStyle;
                }
            })
        )
    }

    function handleMouseLeaveProject(entryId) {
        setButtonHoverStyle(
            buttonHoverStyle.map((buttonStyle, index) => {
                if (index === entryId) {
                    return ({ display: "none" });
                } else {
                    return buttonStyle;
                }
            })
        );
        setEntryHoverStyle(
            entryHoverStyle.map((entryStyle, index) => {
                if (index === entryId) {
                    return ({});
                } else {
                    return entryStyle;
                }
            })
        )
    }

    return (
        <>
            <h2>Projects</h2>
            <ProjectsFields />
            <ProjectsSection 
                projectsInfo={projectsInfo}
                handleMouseEnter={handleMouseEnterProject}
                handleMouseLeave={handleMouseLeaveProject}
                buttonHoverStyle={buttonHoverStyle}
                entryHoverStyle={entryHoverStyle}
            />
        </>
    )
}

export default Projects;