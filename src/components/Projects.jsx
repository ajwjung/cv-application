import "../styles/form.css"
import { useState } from "react";
import { ProjectsFields } from "./FormFields";

function ProjectsSection({ projectsInfo, handleEdit, handleDelete, handleMouseEnter, handleMouseLeave, buttonHoverStyle, entryHoverStyle }) {
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
                                    const entryId = e.target.closest(".projectEntry").id.slice(-1);
                                    handleEdit(entryId);
                                }}
                                style={{margin: "10px"}}
                                type="button"
                            >
                                Edit
                            </button>
                            <button
                                className="deleteInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".projectEntry").id.slice(-1);
                                    handleDelete(entryId);
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
    const [idOfEditedProjectEntry, setIdOfEditedProjectEntry] = useState();
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

    function removeAdditionalFields() {
        const descriptionsFieldset = document.querySelector(".projectDescriptions");

        /* Must always keep at least 2 children
        because one is the legend and one is the default input box */
        while (descriptionsFieldset.childNodes.length > 2) {
            descriptionsFieldset.removeChild(descriptionsFieldset.lastChild);
        }
    }

    function handleAddDescription() {
        const descriptions = document.querySelector(".projectDescriptions");
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "projectDescription";
        newInput.placeholder = "A short description about one feature of your project"
        descriptions.appendChild(newInput);
    }

    function handleProjectSubmit() {
        const form = document.forms.projectsForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);
        const allDescriptions = formData.getAll("projectDescription").filter(val => val);

        // Updating an edited entry
        if (typeof(idOfEditedProjectEntry) === "number") {
            setProjectsInfo(projectsInfo.map((entry, index) => {
                if (index === idOfEditedProjectEntry) {
                    return {
                        ...entry,
                        projectName: formValues.projectName,
                        startDate: formValues.projectStartDate,
                        endDate: formValues.projectEndDate,
                        descriptions: [...allDescriptions],
                    }
                } else {
                    return entry;
                }
            }))
        } else {
            // Submitting a new entry
            setProjectsInfo((prevState) => {
                return (
                    [
                        ...prevState,
                        {
                            id: prevState.length,
                            projectName: formValues.projectName,
                            startDate: formValues.projectStartDate,
                            endDate: formValues.projectEndDate,
                            descriptions: [...allDescriptions],
                        }
                    ]
                )
            });
    
            // Add another style element
            setButtonHoverStyle([
                ...buttonHoverStyle,
                { display: "none" }
            ])
    
            setEntryHoverStyle([
                ...entryHoverStyle,
                {}
            ])
        }

        removeAdditionalFields();
        setIdOfEditedProjectEntry("");
    }

    function handleProjectEdit(entryDivId) {
        const entryToEdit = projectsInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#projectsForm input");
        const allDescriptions = document.querySelectorAll(".projectDescriptions input");
        const numOfInfoValues = entryToEdit.descriptions.length;

        setIdOfEditedProjectEntry(Number(entryDivId));

        // Add as many input fields back as number of additional inputs
        if (allDescriptions.length < numOfInfoValues) {
            const numOfFieldsNeeded = numOfInfoValues - allDescriptions.length;
            [...Array(numOfFieldsNeeded)].forEach(() => handleAddDescription());
        }

        allInputFields.forEach(input => {
            switch (input.id) {
                case "projectName": 
                    input.value = entryToEdit.projectName;
                    break;
                case "projectStartDate": 
                    input.value = entryToEdit.startDate;
                    break;
                case "projectEndDate": 
                    input.value = entryToEdit.endDate;
                    break;
                default:
                    input.value = "";
                    break;
            }
        });

        const updatedDescriptions = document.querySelectorAll(".projectDescriptions input");
        updatedDescriptions.forEach((input, index) => {
            const correspondingText = entryToEdit.descriptions[index];
            input.value = correspondingText ? correspondingText : "";
        })
    }

    function handleDeleteEntry(entryId) {
        setProjectsInfo(
            projectsInfo.filter((_, index) => Number(entryId) !== index)
        );
    }

    return (
        <>
            <h2>Projects</h2>
            <ProjectsFields 
                handleSubmit={handleProjectSubmit}
                handleAddDescription={handleAddDescription}
                editStatus={typeof(idOfEditedProjectEntry) === "number"}
            />
            <ProjectsSection 
                projectsInfo={projectsInfo}
                handleEdit={handleProjectEdit}
                handleDelete={handleDeleteEntry}
                handleMouseEnter={handleMouseEnterProject}
                handleMouseLeave={handleMouseLeaveProject}
                buttonHoverStyle={buttonHoverStyle}
                entryHoverStyle={entryHoverStyle}
            />
        </>
    )
}

export default Projects;