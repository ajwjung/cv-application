import { useState } from "react";
import { ExperienceFields } from "./FormFields";

function ExperienceSection({ experienceInfo, handleEditExperience, handleDeleteExperience, handleMouseEnterExperience, handleMouseLeaveExperience, buttonHoverExperience, entryHoverExperience }) {
    return (
        <section className="experienceWrapper">
            <h2 className="experienceDivider">EXPERIENCE</h2>
            <hr/>
            {experienceInfo.map((entry, index) => {
                return (
                    <div 
                        className="jobEntry" 
                        onMouseEnter={(e) => {
                            const hoveredEntryId = e.target.closest(".jobEntry").id.slice(-1);
                            handleMouseEnterExperience(Number(hoveredEntryId));
                        }}
                        onMouseLeave={(e) => {
                            const hoveredEntryId = e.target.closest(".jobEntry").id.slice(-1);
                            handleMouseLeaveExperience(Number(hoveredEntryId));
                        }}
                        id={"job" + index} 
                        key={"job" + index}
                    >
                        <div 
                            className="jobDetails"
                            style={entryHoverExperience[index]}
                        >
                            <p><b>{entry.position}</b></p>
                            <p><i>{entry.startDate + " - " + entry.endDate}</i></p>
                        </div>
                        <p
                            style={entryHoverExperience[index]} 
                        >
                            {entry.company} | {entry.location}
                        </p>
                        <ul style={entryHoverExperience[index]}>
                            {entry.responsibilities.map((duty, index) => {
                                return (
                                    duty && <li key={index}>{duty}</li>
                                )
                            })}
                        </ul>
                        <div className="btns" style={buttonHoverExperience[index]}>
                            <button
                                className="editInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".jobEntry").id.slice(-1);
                                    handleEditExperience(entryId);
                                }}
                                style={{margin: "10px"}}
                                type="button"
                            >
                                Edit
                            </button>
                            <button
                                className="deleteInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".jobEntry").id.slice(-1);
                                    handleDeleteExperience(entryId);
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

// function Experience() {
//     const [experienceInfo, setExperienceInfo] = useState([
//         {
//             id: 0,
//             position: "Commander",
//             company: "Scout Regiment",
//             location: "Paradis",
//             startDate: "Year 850",
//             endDate: "Present",
//             responsibilities: ["Repsonsibility 1", "Responsibility 2", "Responsibility 3"],
//         }
//     ]);
//     const [idOfEditedJobEntry, setIdOfEditedJobEntry] = useState();
//     const [buttonHoverStyle, setButtonHoverStyle] = useState([{ display: "none" }]);
//     const [entryHoverStyle, setEntryHoverStyle] = useState([{}]);

//     function handleMouseEnterExperience(entryId) {
//         setButtonHoverStyle(
//             buttonHoverStyle.map((buttonStyle, index) => {
//                 if (index === entryId) {
//                     return ({ display: "block" });
//                 } else {
//                     return buttonStyle;
//                 }
//             })
//         );
//         setEntryHoverStyle(
//             entryHoverStyle.map((entryStyle, index) => {
//                 if (index === entryId) {
//                     return ({ opacity: "50%" });
//                 } else {
//                     return entryStyle;
//                 }
//             })
//         )
//     }

//     function handleMouseLeaveExperience(entryId) {
//         setButtonHoverStyle(
//             buttonHoverStyle.map((buttonStyle, index) => {
//                 if (index === entryId) {
//                     return ({ display: "none" });
//                 } else {
//                     return buttonStyle;
//                 }
//             })
//         );
//         setEntryHoverStyle(
//             entryHoverStyle.map((entryStyle, index) => {
//                 if (index === entryId) {
//                     return ({});
//                 } else {
//                     return entryStyle;
//                 }
//             })
//         )
//     }

//     function removeAdditionalFields() {
//         const additionalJobDuties = document.querySelector(".jobDuties");

//         /* Must always keep at least 4 children
//         because one is the legend and three are the required input boxes */
//         while (additionalJobDuties.childNodes.length > 4) {
//             additionalJobDuties.removeChild(additionalJobDuties.lastChild);
//         }
//     }

//     function handleAddJobDuty() {
//         const jobDuties = document.querySelector(".jobDuties");
//         const newInput = document.createElement("input");
//         newInput.type = "text";
//         newInput.name = "jobDuty";
//         newInput.placeholder = "A short description of one core responsibility"
//         jobDuties.appendChild(newInput);
//     }

//     function handleJobSubmit() {
//         const form = document.forms.experienceForm;
//         const formData = new FormData(form);
//         const formValues = Object.fromEntries(formData);
//         const allJobDuties = formData.getAll("jobDuty").filter(val => val);

//         // Updating an edited entry
//         if (typeof(idOfEditedJobEntry) === "number") {
//             setExperienceInfo(experienceInfo.map((entry, index) => {
//                 if (index === idOfEditedJobEntry) {
//                     return {
//                         ...entry,
//                         position: formValues.position,
//                         company: formValues.company,
//                         location: formValues.companyLocation,
//                         startDate: formValues.jobStartDate,
//                         endDate: formValues.jobEndDate,
//                         responsibilities: [...allJobDuties],
//                     }
//                 } else {
//                     return entry;
//                 }
//             }))
//         } else {
//             // Submitting a new entry
//             setExperienceInfo((prevState) => {
//                 return (
//                     [
//                         ...prevState,
//                         {
//                             id: prevState.length,
//                             position: formValues.position,
//                             company: formValues.company,
//                             location: formValues.companyLocation,
//                             startDate: formValues.jobStartDate,
//                             endDate: formValues.jobEndDate,
//                             responsibilities: [...allJobDuties],
//                         }
//                     ]
//                 )
//             });
            
//             // Add another style element
//             setButtonHoverStyle([
//                 ...buttonHoverStyle,
//                 { display: "none" }
//             ])
    
//             setEntryHoverStyle([
//                 ...entryHoverStyle,
//                 {}
//             ])
//         }

//         removeAdditionalFields();
//         setIdOfEditedJobEntry("");
//     }

//     function handleExperienceEdit(entryDivId) {
//         const entryToEdit = experienceInfo[entryDivId];
//         const allInputFields = document.querySelectorAll("#experienceForm input");
//         const allJobDutyInputs = document.querySelectorAll(".jobDuties input");
//         const numOfInfoValues = entryToEdit.responsibilities.length;
//         const experienceForm = document.getElementById("experienceForm");

//         setIdOfEditedJobEntry(Number(entryDivId));

//         // Add as many input fields back as number of additional job duty inputs
//         if (allJobDutyInputs.length < numOfInfoValues) {
//             const numOfFieldsNeeded = numOfInfoValues - allJobDutyInputs.length;
//             [...Array(numOfFieldsNeeded)].forEach(() => handleAddJobDuty());
//         }

//         allInputFields.forEach(input => {
//             switch (input.id) {
//                 case "company": 
//                     input.value = entryToEdit.company;
//                     break;
//                 case "companyLocation": 
//                     input.value = entryToEdit.location;
//                     break;
//                 case "position": 
//                     input.value = entryToEdit.position;
//                     break;
//                 case "jobStartDate": 
//                     input.value = entryToEdit.startDate;
//                     break;
//                 case "jobEndDate": 
//                     input.value = entryToEdit.endDate;
//                     break;
//                 default:
//                     input.value = "";
//                     break;
//             }
//         });
        
//         // Update input fields with values after adding back additional field boxes
//         const updatedJobDutyInputs = document.querySelectorAll(".jobDuties input");
//         updatedJobDutyInputs.forEach((input, index) => {
//             const correspondingText = entryToEdit.responsibilities[index];
//             input.value = correspondingText ? correspondingText : "";
//         })

//         experienceForm.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//             inline: "start"
//         });
//     }

//     function handleDeleteEntry(entryId) {
//         setExperienceInfo(
//             experienceInfo.filter((_, index) => Number(entryId) !== index)
//         );
//     }

//     return (
//         <>
//             <ExperienceFields 
//                 handleSubmit={handleJobSubmit}
//                 handleAddJobDuty={handleAddJobDuty}
//                 editStatus={typeof(idOfEditedJobEntry) === "number"}
//             />
//             <ExperienceSection 
//                 experienceInfo={experienceInfo} 
//                 handleEdit={handleExperienceEdit}
//                 handleDelete={handleDeleteEntry}
//                 handleMouseEnter={handleMouseEnterExperience}
//                 handleMouseLeave={handleMouseLeaveExperience}
//                 buttonHoverStyle={buttonHoverStyle}
//                 entryHoverStyle={entryHoverStyle}
//             />
//         </>
//     )
// }

export default ExperienceSection;