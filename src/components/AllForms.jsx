import PropTypes from "prop-types";
import { GeneralFields, EducationFields, ExperienceFields, ProjectsFields, SkillsFields } from "../components/FormFields";

function AllForms({ 
    editedEntries, handleSubmitGeneral, handleSubmitEducation, handleSubmitExperience, handleSubmitProject, handleSubmitSkill,
    handleAddAdditionalInfo, handleAddJobDuty, handleAddDescription, 
 }) {
    return (
        <div className="formsContainer">
            <h1 className="formHeading">Form Fields</h1>
            <div className="formHelp">
                <p>All required fields are indicated with an asterisk (
                    <span className="requiredAsterisk" aria-label="required field">*</span>
                    ). 
                </p>
                <p>The Projects and Skills sections are optional.</p>
            </div>
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

AllForms.propTypes = {
    editedEntries: PropTypes.array,
    handleSubmitGeneral: PropTypes.func,
    handleSubmitEducation: PropTypes.func,
    handleSubmitExperience: PropTypes.func,
    handleSubmitProject: PropTypes.func,
    handleSubmitSkill: PropTypes.func,
    handleAddAdditionalInfo: PropTypes.func,
    handleAddJobDuty: PropTypes.func,
    handleAddDescription: PropTypes.func,
}

export default AllForms;