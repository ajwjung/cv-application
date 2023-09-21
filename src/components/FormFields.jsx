import { useState } from "react";
import "../styles/App.css"
import { GeneralFields, GeneralSection } from "./General.jsx"
import { EducationFields, EducationSection } from "./Education.jsx"
// import ExperienceFields from "./Experience.jsx"
// import ProjectFields from "./Projects.jsx"
// import SkillsFields from "./Skills.jsx"

function FormFields() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@email.com",
        phoneNumber: "111-111-1111",
        isEdit: false,
    });
    const [educationInfo, setEducationInfo] = useState([
        {
            id: 0,
            schoolName: "University of California, Los Angeles",
            location: "Los Angeles, CA",
            titleOfStudy: "Bachelor of Arts in Business",
            startDate: "June 2019",
            endDate: "May 2023",
            additionalInfo: [""],
            isEdit: false,
        }
    ]);
    const editedEducationEntry = educationInfo.find(entry => entry.isEdit);

    function handleGeneralSubmit() {
        const form = document.forms.generalForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);

        setGeneralInfo({
            ...generalInfo, 
            ...formValues, 
            isEdit: false
        });
    }

    function handleEducationSubmit() {
        const form = document.forms.educationForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);
        const allAdditionalInfo = formData.getAll("additionalInfo").filter(val => val);

        // Updating an edited entry
        if (editedEducationEntry) {
            // Update object values
            setEducationInfo(educationInfo.map((entry, index) => {
                    if (index === editedEducationEntry.id) {
                        return {
                            ...entry,
                            schoolName: formValues.schoolName,
                            location: formValues.location,
                            titleOfStudy: formValues.titleOfStudy,
                            startDate: formValues.startDate,
                            endDate: formValues.endDate,
                            additionalInfo: allAdditionalInfo,
                            isEdit: false,
                        }
                    }
                })
            )
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
                            isEdit: false,
                        }
                    ]
                )
            });
        }

    }

    function handleAddAdditionalInfo() {
        const additionalInfoFields = document.querySelector(".additionalInfoFields");
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "additionalInfo";
        newInput.placeholder = "Additional info (e.g., relevant coursework)"
        additionalInfoFields.appendChild(newInput)
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

    function handleEducationEdit(entryDivId) {
        const entryToEdit = educationInfo[entryDivId]
        const allInputFields = document.querySelectorAll("#educationForm input");
        const allAdditionalInputs = document.querySelectorAll(".additionalInfoFields input")

        console.log(editedEducationEntry, educationInfo);

        setEducationInfo(
            educationInfo.map((entry) => {
                if (entry.id === Number(entryDivId)) {
                    return {
                        ...entry,
                        isEdit: true,
                    }
                } else {
                    return entry;
                }
            })
        )

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
            <h1>Form Fields</h1>
            <h2>General Information</h2>
            <GeneralFields
                handleSubmit={handleGeneralSubmit}  
                editStatus={generalInfo.isEdit}
            />
            <h2>Education</h2>
            <EducationFields
                handleSubmit={handleEducationSubmit}
                handleAddAdditionalInfo={handleAddAdditionalInfo}
                editStatus={editedEducationEntry}
            />
            {/* <h2>Work Experience</h2>
            <ExperienceFields />
            <h2>Projects (optional)</h2>
            <ProjectFields />
            <h2>Technical Skills</h2>
            <SkillsFields /> */}

            <GeneralSection
                firstName={generalInfo.firstName}
                lastName={generalInfo.lastName}
                email={generalInfo.email}
                phoneNumber={generalInfo.phoneNumber}
                handleEdit={handleGeneralEdit}
            />
            <EducationSection
                educationInfo={educationInfo}
                handleEdit={handleEducationEdit}
            />
        </>
    )
}

export default FormFields;
