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

        setEducationInfo((prevState) => {
            return (
                [
                    ...prevState,
                    {
                        ...formValues,
                        id: prevState.length,
                        additionalInfo: [...allAdditionalInfo]
                    }
                ]
            )
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
            <h2>Education</h2>
            <EducationFields
                handleSubmit={handleEducationSubmit}
                additionalInfo={educationInfo.additionalInfo}
                editStatus={educationInfo.isEdit}
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
            />
        </>
    )
}

export default FormFields;
