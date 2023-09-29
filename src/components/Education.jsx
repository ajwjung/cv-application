function EducationSection({ educationInfo, handleEditEducation, handleDeleteEducation, handleMouseEnterEducation, handleMouseLeaveEducation, buttonHoverEducation, entryHoverEducation }) {
    return (
        <section className="educationWrapper">
            <h2 className="educationDivider">EDUCATION</h2>
            <hr/>
            {educationInfo.map((entry, index) => {
                return (
                    <div 
                        className="educationEntry"
                        onMouseEnter={(e) => {
                            const hoveredEntryId = e.target.closest(".educationEntry").id.slice(-1);
                            handleMouseEnterEducation(Number(hoveredEntryId));
                        }} 
                        onMouseLeave={(e) => {
                            const hoveredEntryId = e.target.closest(".educationEntry").id.slice(-1);
                            handleMouseLeaveEducation(Number(hoveredEntryId));
                        }}
                        id={"entry" + index}
                        key={"entry" + index}
                    >
                        <div 
                            className="educationDetails"
                            style={entryHoverEducation[index]} 
                        >
                            <p><b>{entry.schoolName}</b> | {entry.location}</p>
                            <p><i>{entry.startDate + " - " + entry.endDate}</i></p>
                        </div>
                        <p
                            style={entryHoverEducation[index]} 
                        >{entry.titleOfStudy}</p>
                        {
                            /* Only add list if there is text to display */
                            entry.additionalInfo.some(text => text) &&
                            <ul style={entryHoverEducation[index]}>
                                {entry.additionalInfo.map((text, index) => {
                                    return (
                                        text && <li key={index}>{text}</li>
                                    )
                                })}
                            </ul>
                        }
                        <div className="btns" style={buttonHoverEducation[index]}>
                            <button
                                className="editInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".educationEntry").id.slice(-1);
                                    handleEditEducation(entryId);
                                }}
                                style={{margin: "10px"}}
                                type="button"
                            >
                                Edit
                            </button>
                            <button
                                className="deleteInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".educationEntry").id.slice(-1);
                                    handleDeleteEducation("education", entryId);
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

// function Education() {
//     const [educationInfo, setEducationInfo] = useState([
//         {
//             id: 0,
//             schoolName: "University of California, Los Angeles",
//             location: "Los Angeles, CA",
//             titleOfStudy: "Bachelor of Arts in Business",
//             startDate: "June 2019",
//             endDate: "May 2023",
//             additionalInfo: [""],
//         }
//     ]);
//     const [idOfEditedEducationEntry, setIdOfEditedEducationEntry] = useState();
//     const [buttonHoverStyle, setButtonHoverStyle] = useState([{ display: "none" }]);
//     const [entryHoverStyle, setEntryHoverStyle] = useState([{}]);

//     function handleMouseEnterEducation(entryId) {
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

//     function handleMouseLeaveEducation(entryId) {
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
//         const additionalFieldset = document.querySelector(".additionalInfoFields");

//         /* Must always keep at least 2 children
//         because one is the legend and one is the default input box */
//         while (additionalFieldset.childNodes.length > 2) {
//             additionalFieldset.removeChild(additionalFieldset.lastChild);
//         }
//     }

//     function handleAddAdditionalInfo() {
//         const additionalInfoFields = document.querySelector(".additionalInfoFields");
//         const newInput = document.createElement("input");
//         newInput.type = "text";
//         newInput.name = "additionalInfo";
//         newInput.placeholder = "Additional info (e.g., relevant coursework)"
//         additionalInfoFields.appendChild(newInput)
//     }

//     function handleEducationSubmit() {
//         const form = document.forms.educationForm;
//         const formData = new FormData(form);
//         const formValues = Object.fromEntries(formData);
//         const allAdditionalInfo = formData.getAll("additionalInfo").filter(val => val);

//         // Updating an edited entry
//         if (typeof(idOfEditedEducationEntry) === "number") {
//             setEducationInfo(educationInfo.map((entry, index) => {
//                 if (index === idOfEditedEducationEntry) {
//                     return {
//                         ...entry,
//                         schoolName: formValues.schoolName,
//                         location: formValues.location,
//                         titleOfStudy: formValues.titleOfStudy,
//                         startDate: formValues.startDate,
//                         endDate: formValues.endDate,
//                         additionalInfo: [...allAdditionalInfo],
//                     }
//                 } else {
//                     return entry;
//                 }
//             }))
//         } else {
//             // Submitting a new entry
//             setEducationInfo((prevState) => {
//                 return (
//                     [
//                         ...prevState,
//                         {
//                             ...formValues,
//                             id: prevState.length,
//                             additionalInfo: [...allAdditionalInfo],
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
//         setIdOfEditedEducationEntry("");
//     }

//     function handleEducationEdit(entryDivId) {
//         const entryToEdit = educationInfo[entryDivId];
//         const allInputFields = document.querySelectorAll("#educationForm input");
//         const allAdditionalInputs = document.querySelectorAll(".additionalInfoFields input");
//         const numOfInfoValues = entryToEdit.additionalInfo.length;
//         const educationForm = document.getElementById("educationForm");

//         setIdOfEditedEducationEntry(Number(entryDivId));

//         // Add as many input fields back as number of additional inputs
//         if (allAdditionalInputs.length < numOfInfoValues) {
//             const numOfFieldsNeeded = numOfInfoValues - allAdditionalInputs.length;
//             [...Array(numOfFieldsNeeded)].forEach(() => handleAddAdditionalInfo());
//         }

//         allInputFields.forEach(input => {
//             switch (input.id) {
//                 case "schoolName": 
//                     input.value = entryToEdit.schoolName;
//                     break;
//                 case "location": 
//                     input.value = entryToEdit.location;
//                     break;
//                 case "titleOfStudy": 
//                     input.value = entryToEdit.titleOfStudy;
//                     break;
//                 case "startDate": 
//                     input.value = entryToEdit.startDate;
//                     break;
//                 case "endDate": 
//                     input.value = entryToEdit.endDate;
//                     break;
//                 default:
//                     input.value = "";
//                     break;
//             }
//         });

//         // Update input fields with values after adding back additional field boxes
//         const updatedAdditionalInputs = document.querySelectorAll(".additionalInfoFields input");
//         updatedAdditionalInputs.forEach((input, index) => {
//             const correspondingText = entryToEdit.additionalInfo[index];
//             input.value = correspondingText ? correspondingText : "";
//         })

//         educationForm.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//             inline: "start"
//         });
//     }

//     function handleDeleteEntry(entryId) {
//         setEducationInfo(
//             educationInfo.filter((_, index) => Number(entryId) !== index)
//         );
//     }

//     return (
//         <>
//             <EducationFields
//                 handleSubmit={handleEducationSubmit}
//                 handleAddAdditionalInfo={handleAddAdditionalInfo}
//                 editStatus={typeof(idOfEditedEducationEntry) === "number"}
//             />
//             <EducationSection
//                 educationInfo={educationInfo}
//                 handleEdit={handleEducationEdit}
//                 handleDelete={handleDeleteEntry}
//                 handleMouseEnter={handleMouseEnterEducation}
//                 handleMouseLeave={handleMouseLeaveEducation}
//                 buttonHoverStyle={buttonHoverStyle}
//                 entryHoverStyle={entryHoverStyle}
//             />
//         </>
//     )
// }

export default EducationSection;