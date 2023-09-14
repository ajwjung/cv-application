import { useState } from "react";
import "../styles/App.css"
import { GeneralFields, GeneralSection } from "./General.jsx"
// import EducationFields from "./Education.jsx"
// import ExperienceFields from "./Experience.jsx"
// import ProjectFields from "./Projects.jsx"
// import SkillsFields from "./Skills.jsx"

function FormFields() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@email.com",
        phoneNumber: "111-111-1111",
    });

    function handleSubmit() {
        const form = document.forms.generalForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);

        setGeneralInfo({...generalInfo, ...formValues});
    }

    return (
        <>
            <h1>Form Fields</h1>
            <h2>General Information</h2>
            <GeneralFields
                handleSubmit={handleSubmit}   
            />
            {/* <h2>Education</h2>
            <EducationFields />
            <h2>Work Experience</h2>
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
            />
        </>
    )
}

export default FormFields;
