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
    const [educationInfo, setEducationInfo] = useState({
        schoolName: "University of California, Los Angeles",
        location: "Los Angeles, CA",
        titleOfStudy: "Bachelor of Arts in Business",
        startDate: "June 2019",
        endDate: "May 2023",
        additionalInfo: [{
            id: 0,
            text: ""
        }],
        isEdit: false,
    });

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
        const updatedObjects = educationInfo.additionalInfo
            .map(info => {
                return {
                    ...info,
                    text: allAdditionalInfo[info.id]
                        ? allAdditionalInfo[info.id]
                        : ""
                }
            });

        setEducationInfo({
            ...educationInfo, 
            ...formValues,
            additionalInfo: updatedObjects.length > 1
                ? updatedObjects.filter(info => info.text)
                : updatedObjects,
            isEdit: false,
        });
    }

    function handleAddEducationInput() {
        setEducationInfo({...educationInfo, 
            additionalInfo: [...educationInfo.additionalInfo, {
                id: educationInfo.additionalInfo.length,
                text: ""
            }]
        })
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

    function handleEducationEdit() {
        const allEducationInputs = document.querySelectorAll("#educationForm input");
        
        allEducationInputs.forEach(input => {
            if (input.id === "schoolName") {
                input.value = educationInfo.schoolName;
            }

            if (input.id === "location") {
                input.value = educationInfo.location;
            }

            if (input.id === "titleOfStudy") {
                input.value = educationInfo.titleOfStudy;
            }

            if (input.id === "startDate") {
                input.value = educationInfo.startDate;
            }

            if (input.id === "endDate") {
                input.value = educationInfo.endDate;
            }

            educationInfo.additionalInfo.forEach(infoObj => {
                if (input.id === "additionalInfo" + infoObj.id) {
                    input.value = educationInfo.additionalInfo[infoObj.id].text;
                }
            })

        })
        
        setEducationInfo({...educationInfo, isEdit: true});
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
                handleAddEducationInput={handleAddEducationInput}
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
                schoolName={educationInfo.schoolName}
                location={educationInfo.location}
                titleOfStudy={educationInfo.titleOfStudy}
                startDate={educationInfo.startDate}
                endDate={educationInfo.endDate}
                additionalInfo={educationInfo.additionalInfo}
                handleEdit={handleEducationEdit}
            />
        </>
    )
}

export default FormFields;
