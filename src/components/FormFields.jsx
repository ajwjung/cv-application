import { useState } from "react";
import "../styles/App.css"
import { GeneralFields, GeneralSection } from "./General.jsx"
import { EducationFields, EducationSection } from "./Education.jsx"
// import ExperienceFields from "./Experience.jsx"
// import ProjectFields from "./Projects.jsx"
// import SkillsFields from "./Skills.jsx"

function General() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@email.com",
        phoneNumber: "111-111-1111",
        isEdit: false,
    });

    function handleGeneralSubmit() {
        const form = document.forms.generalForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);

        setGeneralInfo({
            ...generalInfo, 
            ...formValues, 
        });
    }

    function handleGeneralEdit() {
        const allGeneralInputs = document.querySelectorAll("#generalForm input");

        allGeneralInputs.forEach(input => {
            if (input.id === "firstName") {
                input.value = generalInfo.firstName;
            }

            if (input.id === "lastName") {
                input.value = generalInfo.lastName;
            }

            if (input.id === "email") {
                input.value = generalInfo.email;
            }

            if (input.id === "phoneNumber") {
                input.value = generalInfo.phoneNumber;
            }
        })

        setGeneralInfo({...generalInfo, isEdit: true});
    }

    return (
        <>
            <h1>Form Fields</h1>
            <h2>General Information</h2>
            <GeneralFields
                handleSubmit={handleGeneralSubmit}  
                editStatus={generalInfo.isEdit}
            />
            <GeneralSection
                firstName={generalInfo.firstName}
                lastName={generalInfo.lastName}
                email={generalInfo.email}
                phoneNumber={generalInfo.phoneNumber}
                handleEdit={handleGeneralEdit}
            />
        </>
    )
}

function Education() {
    const [educationInfo, setEducationInfo] = useState([
        {
            id: 0,
            schoolName: "University of California, Los Angeles",
            location: "Los Angeles, CA",
            titleOfStudy: "Bachelor of Arts in Business",
            startDate: "June 2019",
            endDate: "May 2023",
            additionalInfo: [""],
        }
    ]);
    const [idOfEditedEducationEntry, setIdOfEditedEducationEntry] = useState();
    const [buttonHoverStyle, setButtonHoverStyle] = useState([{ display: "none" }]);
    const [entryHoverStyle, setEntryHoverStyle] = useState([{}]);

    function handleMouseEnterEducation(entryId) {
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

    function handleMouseLeaveEducation(entryId) {
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

    function handleEducationSubmit() {
        const form = document.forms.educationForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);
        const allAdditionalInfo = formData.getAll("additionalInfo").filter(val => val);

        // Updating an edited entry
        if (typeof(idOfEditedEducationEntry) === "number") {
            setEducationInfo(educationInfo.map((entry, index) => {
                if (index === idOfEditedEducationEntry) {
                    return {
                        schoolName: formValues.schoolName,
                        location: formValues.location,
                        titleOfStudy: formValues.titleOfStudy,
                        startDate: formValues.startDate,
                        endDate: formValues.endDate,
                        additionalInfo: [...allAdditionalInfo],
                    }
                } else {
                    return entry;
                }
            }))
        } else {
            // Submitting a new entry
            setEducationInfo((prevState) => {
                return (
                    [
                        ...prevState,
                        {
                            ...formValues,
                            id: prevState.length,
                            additionalInfo: [...allAdditionalInfo],
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

        setIdOfEditedEducationEntry("");
    }

    function handleAddAdditionalInfo() {
        const additionalInfoFields = document.querySelector(".additionalInfoFields");
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "additionalInfo";
        newInput.placeholder = "Additional info (e.g., relevant coursework)"
        additionalInfoFields.appendChild(newInput)
    }

    function handleEducationEdit(entryDivId) {
        const entryToEdit = educationInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#educationForm input");
        const allAdditionalInputs = document.querySelectorAll(".additionalInfoFields input");

        setIdOfEditedEducationEntry(Number(entryDivId));

        allInputFields.forEach(input => {
            switch (input.id) {
                case "schoolName": 
                    input.value = entryToEdit.schoolName;
                    break;
                case "location": 
                    input.value = entryToEdit.location;
                    break;
                case "titleOfStudy": 
                    input.value = entryToEdit.titleOfStudy;
                    break;
                case "startDate": 
                    input.value = entryToEdit.startDate;
                    break;
                case "endDate": 
                    input.value = entryToEdit.endDate;
                    break;
                default:
                    input.value = "";
                    break;
            }
        });

        allAdditionalInputs.forEach((input, index) => {
            const correspondingText = entryToEdit.additionalInfo[index];
            input.value = correspondingText ? correspondingText : "";
        })
    }

    return (
        <>
            <h2>Education</h2>
            <EducationFields
                handleSubmit={handleEducationSubmit}
                handleAddAdditionalInfo={handleAddAdditionalInfo}
                editStatus={typeof(idOfEditedEducationEntry) === "number"}
            />
            <EducationSection
                educationInfo={educationInfo}
                handleEdit={handleEducationEdit}
                handleMouseEnter={handleMouseEnterEducation}
                handleMouseLeave={handleMouseLeaveEducation}
                buttonHoverStyle={buttonHoverStyle}
                entryHoverStyle={entryHoverStyle}
            />
        </>
    )
}

export { General, Education };
