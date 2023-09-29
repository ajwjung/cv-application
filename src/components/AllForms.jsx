import { GeneralFields, EducationFields, ExperienceFields, ProjectsFields, SkillsFields } from "../components/FormFields"

function AllForms({ 
    editedEntries, handleSubmitGeneral, handleSubmitEducation, handleSubmitExperience, handleSubmitProject, handleSubmitSkill,
    handleAddAdditionalInfo, handleAddJobDuty, handleAddDescription, 
 }) {
    return (
        <div className="formsContainer">
            <h1 className="formHeading">Form Fields</h1>
             <div className="formsWrapper">
                 <GeneralFields
                    handleSubmitGeneral={handleSubmitGeneral}
                    editGeneralStatus={editedEntries[0]}
                />
                <EducationFields
                    handleSubmitEducation={handleSubmitEducation}
                    handleAddAdditionalInfo={handleAddAdditionalInfo}
                    editEducationStatus={
                        typeof(editedEntries[1]) === "number"
                    }
                />
                <ExperienceFields
                    handleSubmitExperience={handleSubmitExperience}
                    handleAddJobDuty={handleAddJobDuty}
                    editJobStatus={
                        typeof(editedEntries[2]) === "number"
                    }
                />
                <ProjectsFields
                    handleSubmitProject={handleSubmitProject}
                    handleAddDescription={handleAddDescription}
                    editProjectStatus={
                        typeof(editedEntries[3]) === "number"
                    }
                />
                <SkillsFields
                    handleSubmitSkill={handleSubmitSkill}
                    editSkillStatus={
                        typeof(editedEntries[4]) === "number"
                    }
                />
             </div>
        </div>
    )
}

export default AllForms;