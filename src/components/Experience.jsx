import "../styles/form.css"
import { useState } from "react";
import { ExperienceFields } from "./FormFields";

// Component to create the generated CV
function ExperienceSection({ experienceInfo, handleEdit, handleMouseEnter, handleMouseLeave, buttonHoverStyle, entryHoverStyle }) {
    return (
        <section className="experienceWrapper">
            {experienceInfo.map((entry, index) => {
                return (
                    <div 
                        className="jobEntry" 
                        onMouseEnter={(e) => {
                            const hoveredEntryId = e.target.closest(".jobEntry").id.slice(-1);
                            handleMouseEnter(Number(hoveredEntryId));
                        }}
                        onMouseLeave={(e) => {
                            const hoveredEntryId = e.target.closest(".jobEntry").id.slice(-1);
                            handleMouseLeave(Number(hoveredEntryId));
                        }}
                        id={"job" + index} 
                        key={"job" + index}
                    >
                        <div 
                            className="jobDetails"
                            style={entryHoverStyle[index]}
                        >
                            <p><b>{entry.position}</b></p>
                            <p>{entry.startDate + " - " + entry.endDate}</p>
                        </div>
                        <p
                            style={entryHoverStyle[index]} 
                        >
                            <b>{entry.company}</b> | {entry.location}
                        </p>
                        <ul style={entryHoverStyle[index]}>
                            {entry.responsibilities.map((duty, index) => {
                                return (
                                    duty && <li key={index}>{duty}</li>
                                )
                            })}
                        </ul>
                        <div className="btns" style={buttonHoverStyle[index]}>
                            <button
                                className="editInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".jobEntry").id.slice(-1);
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

// Component to display the form and generated CV
function Experience() {
    const [experienceInfo, setExperienceInfo] = useState([
        {
            id: 0,
            position: "Commander",
            company: "Scout Regiment",
            location: "Paradis",
            startDate: "Year 850",
            endDate: "Present",
            responsibilities: ["Repsonsibility 1", "Responsibility 2", "Responsibility 3"],
        }
    ]);
    const [idOfEditedJobEntry, setIdOfEditedJobEntry] = useState();
    const [buttonHoverStyle, setButtonHoverStyle] = useState([{ display: "none" }]);
    const [entryHoverStyle, setEntryHoverStyle] = useState([{}]);

    function handleMouseEnterExperience(entryId) {
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

    function handleMouseLeaveExperience(entryId) {
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

    function handleAddJobDuty() {
        const jobDuties = document.querySelector(".jobDuties");
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "jobDuty";
        newInput.placeholder = "A short description of one core responsibility"
        jobDuties.appendChild(newInput);
    }

    function handleJobSubmit() {
        const form = document.forms.experienceForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);
        const allJobDuties = formData.getAll("jobDuty").filter(val => val);

        // Updating an edited entry
        if (typeof(idOfEditedJobEntry) === "number") {
            setExperienceInfo(experienceInfo.map((entry, index) => {
                if (index === idOfEditedJobEntry) {
                    return {
                        ...entry,
                        position: formValues.position,
                        company: formValues.company,
                        location: formValues.companyLocation,
                        startDate: formValues.jobStartDate,
                        endDate: formValues.jobEndDate,
                        responsibilities: [...allJobDuties],
                    }
                } else {
                    return entry;
                }
            }))
        } else {
            // Submitting a new entry
            setExperienceInfo((prevState) => {
                return (
                    [
                        ...prevState,
                        {
                            id: prevState.length,
                            position: formValues.position,
                            company: formValues.company,
                            location: formValues.companyLocation,
                            startDate: formValues.jobStartDate,
                            endDate: formValues.jobEndDate,
                            responsibilities: [...allJobDuties],
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

    }

    function handleExperienceEdit(entryDivId) {
        const entryToEdit = experienceInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#experienceForm input");
        const allAdditionalInputs = document.querySelectorAll(".jobDuties input");
        const numOfInfoValues = entryToEdit.responsibilities.length;

        setIdOfEditedJobEntry(Number(entryDivId));

        allInputFields.forEach(input => {
            switch (input.id) {
                case "company": 
                    input.value = entryToEdit.company;
                    break;
                case "companyLocation": 
                    input.value = entryToEdit.location;
                    break;
                case "position": 
                    input.value = entryToEdit.position;
                    break;
                case "jobStartDate": 
                    input.value = entryToEdit.startDate;
                    break;
                case "jobEndDate": 
                    input.value = entryToEdit.endDate;
                    break;
                default:
                    input.value = "";
                    break;
            }
        });
        
        const updatedJobDutyInputs = document.querySelectorAll(".jobDuties input");
        updatedJobDutyInputs.forEach((input, index) => {
            const correspondingText = entryToEdit.responsibilities[index];
            input.value = correspondingText ? correspondingText : "";
        })
    }

    return (
        <>
            <h2>Experience</h2>
            <ExperienceFields 
                handleSubmit={handleJobSubmit}
                handleAddJobDuty={handleAddJobDuty}
            />
            <ExperienceSection 
                experienceInfo={experienceInfo} 
                handleEdit={handleExperienceEdit}
                handleMouseEnter={handleMouseEnterExperience}
                handleMouseLeave={handleMouseLeaveExperience}
                buttonHoverStyle={buttonHoverStyle}
                entryHoverStyle={entryHoverStyle}
            />
        </>
    )
}

export default Experience;