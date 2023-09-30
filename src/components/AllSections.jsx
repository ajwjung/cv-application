import GeneralSection from "./General";
import EducationSection from "./Education"
import ExperienceSection from "./Experience"
import ProjectsSection from "./Projects"
import SkillsSection from "./Skills"

function AllSections({ 
    generalInfo, educationInfo, experienceInfo, projectsInfo, skillsInfo,
    handleEditGeneral, handleEditEducation, handleEditExperience, handleEditProject, handleEditSkill, handleDeleteEntry, handleMouseEnterEntry, handleMouseLeaveEntry, buttonHoverStyle, entryHoverStyle
 }) {
    return (
        <div className="sectionsContainer">
            <h1 className="sectionsHeading">Generated CV</h1>
            <div className="cvInfo">
                <p>Hover over a section's entry to edit or delete it.</p>
            </div>
            <div className="sectionsWrapper">
                <GeneralSection
                    generalInfo={generalInfo}
                    handleEditGeneral={handleEditGeneral}
                    handleMouseEnterGeneral={handleMouseEnterEntry}
                    handleMouseLeaveGeneral={handleMouseLeaveEntry}
                    buttonHoverGeneral={buttonHoverStyle}
                    entryHoverGeneral={entryHoverStyle}
                />
                <ProjectsSection
                    projectsInfo={projectsInfo}
                    handleEditProject={handleEditProject}
                    handleDeleteProject={handleDeleteEntry}
                    handleMouseEnterProject={handleMouseEnterEntry}
                    handleMouseLeaveProject={handleMouseLeaveEntry}
                    buttonHoverProject={buttonHoverStyle}
                    entryHoverProject={entryHoverStyle}
                />
                <ExperienceSection
                    experienceInfo={experienceInfo}
                    handleEditExperience={handleEditExperience}
                    handleDeleteExperience={handleDeleteEntry}
                    handleMouseEnterExperience={handleMouseEnterEntry}
                    handleMouseLeaveExperience={handleMouseLeaveEntry}
                    buttonHoverExperience={buttonHoverStyle}
                    entryHoverExperience={entryHoverStyle}
                />
                <EducationSection
                    educationInfo={educationInfo}
                    handleEditEducation={handleEditEducation}
                    handleDeleteEducation={handleDeleteEntry}
                    handleMouseEnterEducation={handleMouseEnterEntry}
                    handleMouseLeaveEducation={handleMouseLeaveEntry}
                    buttonHoverEducation={buttonHoverStyle}
                    entryHoverEducation={entryHoverStyle}
                />
                <SkillsSection
                    skillsInfo={skillsInfo}
                    handleEditSkill={handleEditSkill}
                    handleDeleteSkill={handleDeleteEntry}
                    handleMouseEnterSkill={handleMouseEnterEntry}
                    handleMouseLeaveSkill={handleMouseLeaveEntry}
                    buttonHoverSkill={buttonHoverStyle}
                    entryHoverSkill={entryHoverStyle}
                />
            </div>
        </div>
    )
}

export default AllSections;