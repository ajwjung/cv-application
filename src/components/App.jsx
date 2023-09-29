import { useState } from "react";
import AllForms from "./AllForms";
import AllSections from "./AllSections";

function App() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@email.com",
        phoneNumber: "111-111-1111",
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
        }
    ]);
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
    const [projectsInfo, setProjectsInfo] = useState([
        {
            id: 0,
            projectName: "Retaking Wall Maria",
            startDate: "846",
            endDate: "846",
            descriptions: ["Led 5+ survey corps regiments to regain Wall Maria from 200+ titans"],
        }
    ]);
    const [skillsInfo, setSkillsInfo] = useState([
        {
            id: 0,
            category: "Special",
            listedSkills: "High agility, decision-making, problem-solving"
        }
    ]);
    const [editedEntries, setEditedEntries] = useState(
        [...Array(5).fill("")]
    );
    const [buttonHoverStyle, setButtonHoverStyle] = useState([
        ...Array(5).fill([{ display: "none" }])
    ]);
    const [entryHoverStyle, setEntryHoverStyle] = useState([
        ...Array(5).fill([{}])
    ]);

    function handleMouseEnterEntry(sectionId, entryId) {
        /* Updates hover styles for the target entry in the target section
            sectionIds are:
                0 - general
                1 - education
                2 - experience
                3 - projects
                4 - skills
        */

        setButtonHoverStyle(
            buttonHoverStyle.map((sectionStyles, sectionIndex) => {
                if (sectionIndex === sectionId) {
                    return sectionStyles.map((buttonStyle, styleIndex) => {
                        if (styleIndex === entryId) {
                            return ({ display: "block" })
                        } else {
                            return buttonStyle;
                        }
                    })
                } else {
                    return sectionStyles;
                }
                    
            })
        )

        setEntryHoverStyle(
            entryHoverStyle.map((sectionStyles, sectionIndex) => {
                if (sectionIndex === sectionId) {
                    return sectionStyles.map((entryStyle, styleIndex) => {
                        if (styleIndex === entryId) {
                            return ({ opacity: "50%" })
                        } else {
                            return entryStyle;
                        }
                    })
                } else {
                    return sectionStyles;
                }
                    
            })
        )
    }

    function handleMouseLeaveEntry(sectionId, entryId) {
        /* Updates hover styles for the target entry in the target section
            sectionIds are:
                0 - general
                1 - education
                2 - experience
                3 - projects
                4 - skills
        */
        setButtonHoverStyle(
            buttonHoverStyle.map((sectionStyles, sectionIndex) => {
                if (sectionIndex === sectionId) {
                    return sectionStyles.map((buttonStyle, styleIndex) => {
                        if (styleIndex === entryId) {
                            return ({ display: "none" })
                        } else {
                            return buttonStyle;
                        }
                    })
                } else {
                    return sectionStyles;
                }
                    
            })
        )

        setEntryHoverStyle(
            entryHoverStyle.map((sectionStyles, sectionIndex) => {
                if (sectionIndex === sectionId) {
                    return sectionStyles.map((entryStyle, styleIndex) => {
                        if (styleIndex === entryId) {
                            return ({})
                        } else {
                            return entryStyle;
                        }
                    })
                } else {
                    return sectionStyles;
                }
                    
            })
        )
    }

    function addAnotherStyleElement(sectionId) {
        setButtonHoverStyle(
            buttonHoverStyle.map((sectionStyles, index) => {
                if (index === sectionId) {
                    return [
                        ...sectionStyles,
                        { display: "none" }
                    ]
                } else {
                    return sectionStyles;
                }
            })
        )

        setEntryHoverStyle(
            entryHoverStyle.map((sectionStyles, index) => {
                if (index === sectionId) {
                    return [
                        ...sectionStyles,
                        { opacity: "50%" }
                    ]
                } else {
                    return sectionStyles;
                }
            })
        )
    }

    function updateEditedEntryId(entryId, newValue) {
        /* entryIds/indexes map to:
            0 = general
            1 = education
            2 = experience
            3 = projects
            4 = skills
        */
        setEditedEntries(editedEntries.map((entry, index) => {
            if (index === entryId) {
                return newValue;
            } else {
                return entry;
            }
        }));
    }

    function removeAdditionalFields(sectionName) {
        const additionalEducationFields = document.querySelector(".additionalInfoFields");
        const additionalJobDuties = document.querySelector(".jobDuties");
        const additionalDescriptions = document.querySelector(".projectDescriptions");
        let field;
        let minChildren;

        switch (sectionName) {
            case "education":
                field = additionalEducationFields;
                minChildren = 2;
                break;
            case "experience":
                field = additionalJobDuties;
                minChildren = 4;
                break;
            case "projects":
                field = additionalDescriptions;
                minChildren = 2;
                break;
        }

        while (field.childNodes.length > minChildren) {
            field.removeChild(field.lastChild);
        }
    }

    function handleDeleteEntry(sectionName, entryId) {
        switch (sectionName) {
            case "education":
                setEducationInfo(
                    educationInfo.filter((_, index) => Number(entryId) !== index)
                );
                break;
            case "experience":
                setExperienceInfo(
                    experienceInfo.filter((_, index) => Number(entryId) !== index)
                );
                break;
            case "project":
                setProjectsInfo(
                    projectsInfo.filter((_, index) => Number(entryId) !== index)
                );
                break;
            case "skill":
                setSkillsInfo(
                    skillsInfo.filter((_, index) => Number(entryId) !== index)
                );
                break;
        }
    }

    /* ========== GENERAL ========== */
    function handleGeneralSubmit() {
        const form = document.forms.generalForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);

        setGeneralInfo({
            ...generalInfo, 
            ...formValues, 
        });

        // setEditGeneralStatus(false);
        updateEditedEntryId(0, false);
    }

    function handleEditGeneral() {
        const allGeneralInputs = document.querySelectorAll("#generalForm input");
        const generalForm = document.getElementById("generalForm");

        // setEditGeneralStatus(true);
        updateEditedEntryId(0, true);

        allGeneralInputs.forEach(input => {
            switch (input.id) {
                case "firstName":
                    input.value = generalInfo.firstName;
                    break;
                case "lastName":
                    input.value = generalInfo.lastName;
                    break;
                case "email":
                    input.value = generalInfo.email;
                    break;
                case "phoneNumber":
                    input.value = generalInfo.phoneNumber;
                    break;
                
            }
        })

        generalForm.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        });
    }

    /* ========== EDUCATION ========== */
    function handleAddAdditionalInfo() {
        const additionalInfoFields = document.querySelector(".additionalInfoFields");
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "additionalInfo";
        newInput.placeholder = "Additional info (e.g., relevant coursework)"
        additionalInfoFields.appendChild(newInput)
    }

    function handleEducationSubmit() {
        const form = document.forms.educationForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);
        const allAdditionalInfo = formData.getAll("additionalInfo").filter(val => val);

        // Updating an edited entry
        if (typeof(editedEntries[1]) === "number") {
            setEducationInfo(educationInfo.map((entry, index) => {
                if (index === editedEntries[1]) {
                    return {
                        ...entry,
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
                        {
                            ...formValues,
                            id: prevState.length,
                            additionalInfo: [...allAdditionalInfo],
                        },
                        ...prevState
                    ]
                )
            });

            addAnotherStyleElement(1);
        }

        removeAdditionalFields("education");
        updateEditedEntryId(1, "");
    }

    function handleEditEducation(entryDivId) {
        const entryToEdit = educationInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#educationForm input");
        const allAdditionalInputs = document.querySelectorAll(".additionalInfoFields input");
        const numOfInfoValues = entryToEdit.additionalInfo.length;
        const educationForm = document.getElementById("educationForm");

        updateEditedEntryId(1, Number(entryDivId));

        // Add as many input fields back as number of additional inputs
        if (allAdditionalInputs.length < numOfInfoValues) {
            const numOfFieldsNeeded = numOfInfoValues - allAdditionalInputs.length;
            [...Array(numOfFieldsNeeded)].forEach(() => handleAddAdditionalInfo());
        }

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

        // Update input fields with values after adding back additional field boxes
        const updatedAdditionalInputs = document.querySelectorAll(".additionalInfoFields input");
        updatedAdditionalInputs.forEach((input, index) => {
            const correspondingText = entryToEdit.additionalInfo[index];
            input.value = correspondingText ? correspondingText : "";
        })

        educationForm.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        });
    }

    /* ========== EXPERIENCE ========== */
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
        if (typeof(editedEntries[2]) === "number") {
            setExperienceInfo(experienceInfo.map((entry, index) => {
                if (index === editedEntries[2]) {
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
                        {
                            id: prevState.length,
                            position: formValues.position,
                            company: formValues.company,
                            location: formValues.companyLocation,
                            startDate: formValues.jobStartDate,
                            endDate: formValues.jobEndDate,
                            responsibilities: [...allJobDuties],
                        },
                        ...prevState
                    ]
                )
            });
            
            addAnotherStyleElement(2);
        }

        removeAdditionalFields("experience");
        updateEditedEntryId(2, "");
    }

    function handleEditExperience(entryDivId) {
        const entryToEdit = experienceInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#experienceForm input");
        const allJobDutyInputs = document.querySelectorAll(".jobDuties input");
        const numOfInfoValues = entryToEdit.responsibilities.length;
        const experienceForm = document.getElementById("experienceForm");
        
        updateEditedEntryId(2, Number(entryDivId));

        // Add as many input fields back as number of additional job duty inputs
        if (allJobDutyInputs.length < numOfInfoValues) {
            const numOfFieldsNeeded = numOfInfoValues - allJobDutyInputs.length;
            [...Array(numOfFieldsNeeded)].forEach(() => handleAddJobDuty());
        }

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
        
        // Update input fields with values after adding back additional field boxes
        const updatedJobDutyInputs = document.querySelectorAll(".jobDuties input");
        updatedJobDutyInputs.forEach((input, index) => {
            const correspondingText = entryToEdit.responsibilities[index];
            input.value = correspondingText ? correspondingText : "";
        })

        experienceForm.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        });
    }

    /* ========== PROJECTS ========== */
    function handleAddDescription() {
        const descriptions = document.querySelector(".projectDescriptions");
        const newInput = document.createElement("input");
        newInput.type = "text";
        newInput.name = "projectDescription";
        newInput.placeholder = "A short description about one feature of your project"
        descriptions.appendChild(newInput);
    }

    function handleSubmitProject() {
        const form = document.forms.projectsForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);
        const allDescriptions = formData.getAll("projectDescription").filter(val => val);

        // Updating an edited entry
        if (typeof(editedEntries[3]) === "number") {
            setProjectsInfo(projectsInfo.map((entry, index) => {
                if (index === editedEntries[3]) {
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
                        {
                            id: prevState.length,
                            projectName: formValues.projectName,
                            startDate: formValues.projectStartDate,
                            endDate: formValues.projectEndDate,
                            descriptions: [...allDescriptions],
                        },
                        ...prevState
                    ]
                )
            });
    
            addAnotherStyleElement(3);
        }

        removeAdditionalFields("projects");
        updateEditedEntryId(3, "");
    }

    function handleEditProject(entryDivId) {
        const entryToEdit = projectsInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#projectsForm input");
        const allDescriptions = document.querySelectorAll(".projectDescriptions input");
        const numOfInfoValues = entryToEdit.descriptions.length;
        const projectsForm = document.getElementById("projectsForm");

        updateEditedEntryId(3, Number(entryDivId));

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

        // Update input fields with values after adding back additional field boxes
        const updatedDescriptions = document.querySelectorAll(".projectDescriptions input");
        updatedDescriptions.forEach((input, index) => {
            const correspondingText = entryToEdit.descriptions[index];
            input.value = correspondingText ? correspondingText : "";
        })

        projectsForm.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        });
    }

    /* ========== SKILLS ========== */
    function handleSubmitSkill() {
        const form = document.forms.skillsForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);
        
        // Updating an edited entry
        if (typeof(editedEntries[4]) === "number") {
            setSkillsInfo(skillsInfo.map((entry, index) => {
                if (index === editedEntries[4]) {
                    return {
                        ...entry,
                        category: formValues.skillCategory,
                        listedSkills: formValues.listOfSkills,
                    }
                } else {
                    return entry;
                }
            }));
        } else {
            // Submitting a new entry
            setSkillsInfo((prevState) => {
                return (
                    [
                        ...prevState,
                        {
                            id: prevState.length,
                            category: formValues.skillCategory,
                            listedSkills: formValues.listOfSkills,
                        }
                    ]
                )
            });
    
            addAnotherStyleElement(4);
        }
        
        updateEditedEntryId(4, "");
    }

    function handleEditSkill(entryDivId) {
        const entryToEdit = skillsInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#skillsForm input");
        const skillsForm = document.getElementById("skillsForm");
        
        updateEditedEntryId(4, Number(entryDivId));

        allInputFields.forEach(input => {
            switch (input.id) {
                case "skillCategory": 
                    input.value = entryToEdit.category;
                    break;
                case "listOfSkills": 
                    input.value = entryToEdit.listedSkills;
                    break;
                default:
                    input.value = "";
                    break;
            }
        });

        skillsForm.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        });
    }

    return (
        <>
            <AllForms 
                editedEntries={editedEntries}
                handleSubmitGeneral={handleGeneralSubmit}
                handleSubmitEducation={handleEducationSubmit}
                handleAddAdditionalInfo={handleAddAdditionalInfo}
                handleSubmitExperience={handleJobSubmit}
                handleAddJobDuty={handleAddJobDuty}
                handleSubmitProject={handleSubmitProject}
                handleAddDescription={handleAddDescription}
                handleSubmitSkill={handleSubmitSkill}
            />
            <AllSections 
                handleDeleteEntry={handleDeleteEntry} 
                handleMouseEnterEntry={handleMouseEnterEntry}
                handleMouseLeaveEntry={handleMouseLeaveEntry}
                buttonHoverStyle={buttonHoverStyle}
                entryHoverStyle={entryHoverStyle}
                generalInfo={generalInfo}
                handleEditGeneral={handleEditGeneral}
                educationInfo={educationInfo}
                handleEditEducation={handleEditEducation}
                experienceInfo={experienceInfo} 
                handleEditExperience={handleEditExperience}
                projectsInfo={projectsInfo}
                handleEditProject={handleEditProject}
                skillsInfo={skillsInfo} 
                handleEditSkill={handleEditSkill}
            />
        </>
    )
}

export default App;