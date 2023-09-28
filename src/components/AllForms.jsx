import { GeneralFields, EducationFields, ExperienceFields, ProjectsFields, SkillsFields } from "../components/FormFields"

function AllForms({ 
    editGeneralStatus, editEducationStatus, editJobStatus, editProjectStatus, editSkillStatus, handleSubmitGeneral, handleSubmitEducation, handleSubmitExperience, handleSubmitProject, handleSubmitSkill,
    handleAddAdditionalInfo, handleAddJobDuty, handleAddDescription, 
 }) {
    return (
        <div className="formsContainer">
            <h1 className="formHeading">Form Fields</h1>
             <div className="formsWrapper">
                 <GeneralFields
                    handleSubmitGeneral={handleSubmitGeneral}
                    editGeneralStatus={editGeneralStatus}
                />
                <EducationFields
                    handleSubmitEducation={handleSubmitEducation}
                    handleAddAdditionalInfo={handleAddAdditionalInfo}
                    editEducationStatus={editEducationStatus}
                />
                <ExperienceFields
                    handleSubmitExperience={handleSubmitExperience}
                    handleAddJobDuty={handleAddJobDuty}
                    editJobStatus={editJobStatus}
                />
                <ProjectsFields
                    handleSubmitProject={handleSubmitProject}
                    handleAddDescription={handleAddDescription}
                    editProjectStatus={editProjectStatus}
                />
                <SkillsFields
                    handleSubmitSkill={handleSubmitSkill}
                    editSkillStatus={editSkillStatus}
                />
             </div>
        </div>
    )
}

export default AllForms;