import { useState } from "react";
import AllForms from "./AllForms";
import AllSections from "./AllSections";

function App() {
    /* ========== GENERAL ========== */
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@email.com",
        phoneNumber: "111-111-1111",
    });
    const [editGeneralStatus, setEditGeneralStatus] = useState(false);

    function handleGeneralSubmit() {
        const form = document.forms.generalForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);

        setGeneralInfo({
            ...generalInfo, 
            ...formValues, 
        });

        setEditGeneralStatus(false);
    }

    function handleEditGeneral() {
        const allGeneralInputs = document.querySelectorAll("#generalForm input");
        const generalForm = document.getElementById("generalForm");

        setEditGeneralStatus(true);

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
    const [buttonHoverEducation, setButtonHoverEducation] = useState([{ display: "none" }]);
    const [entryHoverEducation, setEntryHoverEducation] = useState([{}]);

    function handleMouseEnterEducation(entryId) {
        setButtonHoverEducation(
            buttonHoverEducation.map((buttonEducation, index) => {
                if (index === entryId) {
                    return ({ display: "block" });
                } else {
                    return buttonEducation;
                }
            })
        );
        setEntryHoverEducation(
            entryHoverEducation.map((entryEducation, index) => {
                if (index === entryId) {
                    return ({ opacity: "50%" });
                } else {
                    return entryEducation;
                }
            })
        )
    }

    function handleMouseLeaveEducation(entryId) {
        setButtonHoverEducation(
            buttonHoverEducation.map((buttonEducation, index) => {
                if (index === entryId) {
                    return ({ display: "none" });
                } else {
                    return buttonEducation;
                }
            })
        );
        setEntryHoverEducation(
            entryHoverEducation.map((entryEducation, index) => {
                if (index === entryId) {
                    return ({});
                } else {
                    return entryEducation;
                }
            })
        )
    }

    function removeAdditionalEducation() {
        const additionalFieldset = document.querySelector(".additionalInfoFields");

        /* Must always keep at least 2 children
        because one is the legend and one is the default input box */
        while (additionalFieldset.childNodes.length > 2) {
            additionalFieldset.removeChild(additionalFieldset.lastChild);
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
                        ...prevState,
                        {
                            ...formValues,
                            id: prevState.length,
                            additionalInfo: [...allAdditionalInfo],
                        }
                    ]
                )
            });

            // Add another Education element
            setButtonHoverEducation([
                ...buttonHoverEducation,
                { display: "none" }
            ])

            setEntryHoverEducation([
                ...entryHoverEducation,
                {}
            ])
        }

        removeAdditionalEducation();
        setIdOfEditedEducationEntry("");
    }

    function handleEditEducation(entryDivId) {
        const entryToEdit = educationInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#educationForm input");
        const allAdditionalInputs = document.querySelectorAll(".additionalInfoFields input");
        const numOfInfoValues = entryToEdit.additionalInfo.length;
        const educationForm = document.getElementById("educationForm");

        setIdOfEditedEducationEntry(Number(entryDivId));

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

    function handleDeleteEducation(entryId) {
        setEducationInfo(
            educationInfo.filter((_, index) => Number(entryId) !== index)
        );
    }

    /* ========== EXPERIENCE ========== */
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
    const [buttonHoverExperience, setButtonHoverExperience] = useState([{ display: "none" }]);
    const [entryHoverExperience, setEntryHoverExperience] = useState([{}]);

    function handleMouseEnterExperience(entryId) {
        setButtonHoverExperience(
            buttonHoverExperience.map((buttonExperience, index) => {
                if (index === entryId) {
                    return ({ display: "block" });
                } else {
                    return buttonExperience;
                }
            })
        );
        setEntryHoverExperience(
            entryHoverExperience.map((entryExperience, index) => {
                if (index === entryId) {
                    return ({ opacity: "50%" });
                } else {
                    return entryExperience;
                }
            })
        )
    }

    function handleMouseLeaveExperience(entryId) {
        setButtonHoverExperience(
            buttonHoverExperience.map((buttonExperience, index) => {
                if (index === entryId) {
                    return ({ display: "none" });
                } else {
                    return buttonExperience;
                }
            })
        );
        setEntryHoverExperience(
            entryHoverExperience.map((entryExperience, index) => {
                if (index === entryId) {
                    return ({});
                } else {
                    return entryExperience;
                }
            })
        )
    }

    function removeAdditionalJobs() {
        const additionalJobDuties = document.querySelector(".jobDuties");

        /* Must always keep at least 4 children
        because one is the legend and three are the required input boxes */
        while (additionalJobDuties.childNodes.length > 4) {
            additionalJobDuties.removeChild(additionalJobDuties.lastChild);
        }
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
            
            // Add another Experience element
            setButtonHoverExperience([
                ...buttonHoverExperience,
                { display: "none" }
            ])
    
            setEntryHoverExperience([
                ...entryHoverExperience,
                {}
            ])
        }

        removeAdditionalJobs();
        setIdOfEditedJobEntry("");
    }

    function handleEditExperience(entryDivId) {
        const entryToEdit = experienceInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#experienceForm input");
        const allJobDutyInputs = document.querySelectorAll(".jobDuties input");
        const numOfInfoValues = entryToEdit.responsibilities.length;
        const experienceForm = document.getElementById("experienceForm");

        setIdOfEditedJobEntry(Number(entryDivId));

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

    function handleDeleteExperience(entryId) {
        setExperienceInfo(
            experienceInfo.filter((_, index) => Number(entryId) !== index)
        );
    }

    /* ========== PROJECTS ========== */
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
    const [buttonHoverProject, setButtonHoverProject] = useState([{ display: "none" }]);
    const [entryHoverProject, setEntryHoverProject] = useState([{}]);

    function handleMouseEnterProject(entryId) {
        setButtonHoverProject(
            buttonHoverProject.map((buttonStyle, index) => {
                if (index === entryId) {
                    return ({ display: "block" });
                } else {
                    return buttonStyle;
                }
            })
        );
        setEntryHoverProject(
            entryHoverProject.map((entryStyle, index) => {
                if (index === entryId) {
                    return ({ opacity: "50%" });
                } else {
                    return entryStyle;
                }
            })
        )
    }

    function handleMouseLeaveProject(entryId) {
        setButtonHoverProject(
            buttonHoverProject.map((buttonStyle, index) => {
                if (index === entryId) {
                    return ({ display: "none" });
                } else {
                    return buttonStyle;
                }
            })
        );
        setEntryHoverProject(
            entryHoverProject.map((entryStyle, index) => {
                if (index === entryId) {
                    return ({});
                } else {
                    return entryStyle;
                }
            })
        )
    }

    function removeAdditionalDescriptions() {
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

    function handleSubmitProject() {
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
            setButtonHoverProject([
                ...buttonHoverProject,
                { display: "none" }
            ])
    
            setEntryHoverProject([
                ...entryHoverProject,
                {}
            ])
        }

        removeAdditionalDescriptions();
        setIdOfEditedProjectEntry("");
    }

    function handleEditProject(entryDivId) {
        const entryToEdit = projectsInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#projectsForm input");
        const allDescriptions = document.querySelectorAll(".projectDescriptions input");
        const numOfInfoValues = entryToEdit.descriptions.length;
        const projectsForm = document.getElementById("projectsForm");

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

    function handleDeleteProject(entryId) {
        setProjectsInfo(
            projectsInfo.filter((_, index) => Number(entryId) !== index)
        );
    }

    /* ========== SKILLS ========== */
    const [skillsInfo, setSkillsInfo] = useState([
        {
            id: 0,
            category: "Special",
            listedSkills: "High agility, decision-making, problem-solving"
        }
    ]);
    const [idOfEditedSkillEntry, setIdOfEditedSkillEntry] = useState();
    const [buttonHoverSkill, setButtonHoverSkill] = useState([{ display: "none" }]);
    const [entryHoverSkill, setEntryHoverSkill] = useState([{}]);

    function handleMouseEnterSkill(entryId) {
        setButtonHoverSkill(
            buttonHoverSkill.map((buttonStyle, index) => {
                if (index === entryId) {
                    return ({ display: "block" });
                } else {
                    return buttonStyle;
                }
            })
        );
        setEntryHoverSkill(
            entryHoverSkill.map((entryStyle, index) => {
                if (index === entryId) {
                    return ({ opacity: "50%" });
                } else {
                    return entryStyle;
                }
            })
        )
    }

    function handleMouseLeaveSkill(entryId) {
        setButtonHoverSkill(
            buttonHoverSkill.map((buttonStyle, index) => {
                if (index === entryId) {
                    return ({ display: "none" });
                } else {
                    return buttonStyle;
                }
            })
        );
        setEntryHoverSkill(
            entryHoverSkill.map((entryStyle, index) => {
                if (index === entryId) {
                    return ({});
                } else {
                    return entryStyle;
                }
            })
        )
    }

    function handleSubmitSkill() {
        const form = document.forms.skillsForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);
        
        // Updating an edited entry
        if (typeof(idOfEditedSkillEntry) === "number") {
            setSkillsInfo(skillsInfo.map((entry, index) => {
                if (index === idOfEditedSkillEntry) {
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
    
            // Add another style element
            setButtonHoverSkill([
                ...buttonHoverSkill,
                { display: "none" }
            ]);
    
            setEntryHoverSkill([
                ...entryHoverSkill,
                {}
            ]);
        }
        
        setIdOfEditedSkillEntry("");
    }

    function handleEditSkill(entryDivId) {
        const entryToEdit = skillsInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#skillsForm input");
        const skillsForm = document.getElementById("skillsForm");
        
        setIdOfEditedSkillEntry(Number(entryDivId));

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

    function handleDeleteSkill(entryId) {
        setSkillsInfo(
            skillsInfo.filter((_, index) => Number(entryId) !== index)
        );
    }

    return (
        <>
            <h1>Form Fields</h1>
            <AllForms 
                // General
                handleSubmitGeneral={handleGeneralSubmit}  
                editGeneralStatus={editGeneralStatus}
                // Education
                handleSubmitEducation={handleEducationSubmit}
                handleAddAdditionalInfo={handleAddAdditionalInfo}
                editEducationStatus={typeof(idOfEditedEducationEntry) === "number"}
                // Experience
                handleSubmitExperience={handleJobSubmit}
                handleAddJobDuty={handleAddJobDuty}
                editJobStatus={typeof(idOfEditedJobEntry) === "number"}
                // Projects
                handleSubmitProject={handleSubmitProject}
                handleAddDescription={handleAddDescription}
                editProjectStatus={typeof(idOfEditedProjectEntry) === "number"}
                // Skills
                handleSubmitSkill={handleSubmitSkill}
                editSkillStatus={typeof(idOfEditedSkillEntry) === "number"}
            />
            <h1>Generated CV</h1>
            <AllSections 
                // General
                generalInfo={generalInfo}
                handleEditGeneral={handleEditGeneral}
                // Education
                educationInfo={educationInfo}
                handleEditEducation={handleEditEducation}
                handleDeleteEducation={handleDeleteEducation}
                handleMouseEnterEducation={handleMouseEnterEducation}
                handleMouseLeaveEducation={handleMouseLeaveEducation}
                buttonHoverEducation={buttonHoverEducation}
                entryHoverEducation={entryHoverEducation}
                // Experience
                experienceInfo={experienceInfo} 
                handleEditExperience={handleEditExperience}
                handleDeleteExperience={handleDeleteExperience}
                handleMouseEnterExperience={handleMouseEnterExperience}
                handleMouseLeaveExperience={handleMouseLeaveExperience}
                buttonHoverExperience={buttonHoverExperience}
                entryHoverExperience={entryHoverExperience}
                // Projects
                projectsInfo={projectsInfo}
                handleEditProject={handleEditProject}
                handleDeleteProject={handleDeleteProject}
                handleMouseEnterProject={handleMouseEnterProject}
                handleMouseLeaveProject={handleMouseLeaveProject}
                buttonHoverProject={buttonHoverProject}
                entryHoverProject={entryHoverProject}
                // Skills
                skillsInfo={skillsInfo} 
                handleEditSkill={handleEditSkill}
                handleDeleteSkill={handleDeleteSkill}
                handleMouseEnterSkill={handleMouseEnterSkill}
                handleMouseLeaveSkill={handleMouseLeaveSkill}
                buttonHoverSkill={buttonHoverSkill}
                entryHoverSkill={entryHoverSkill}
            />
        </>
    )
}

export default App;