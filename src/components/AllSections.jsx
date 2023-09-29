import GeneralSection from "./General";
import EducationSection from "./Education"
import ExperienceSection from "./Experience"
import ProjectsSection from "./Projects"
import SkillsSection from "./Skills"

function AllSections({ 
    generalInfo, educationInfo, experienceInfo, projectsInfo, skillsInfo,
    handleEditGeneral, handleEditEducation, handleEditExperience, handleEditProject, handleEditSkill, 
    handleDeleteEntry,
    handleMouseEnterEducation, handleMouseEnterExperience, handleMouseEnterProject, handleMouseEnterSkill, 
    handleMouseLeaveEducation, handleMouseLeaveExperience, handleMouseLeaveProject, handleMouseLeaveSkill,
    buttonHoverEducation, buttonHoverExperience, buttonHoverProject, buttonHoverSkill, 
    entryHoverEducation, entryHoverExperience, entryHoverProject, entryHoverSkill
 }) {
    return (
        <div className="sectionsContainer">
            <h1 className="sectionsHeading">Generated CV</h1>
            <div className="sectionsWrapper">
                <GeneralSection
                    generalInfo={generalInfo}
                    handleEditGeneral={handleEditGeneral}
                />
                <EducationSection
                    educationInfo={educationInfo}
                    handleEditEducation={handleEditEducation}
                    handleDeleteEducation={handleDeleteEntry}
                    handleMouseEnterEducation={handleMouseEnterEducation}
                    handleMouseLeaveEducation={handleMouseLeaveEducation}
                    buttonHoverEducation={buttonHoverEducation}
                    entryHoverEducation={entryHoverEducation}
                />
                <ExperienceSection
                    experienceInfo={experienceInfo}
                    handleEditExperience={handleEditExperience}
                    handleDeleteExperience={handleDeleteEntry}
                    handleMouseEnterExperience={handleMouseEnterExperience}
                    handleMouseLeaveExperience={handleMouseLeaveExperience}
                    buttonHoverExperience={buttonHoverExperience}
                    entryHoverExperience={entryHoverExperience}
                />
                <ProjectsSection
                    projectsInfo={projectsInfo}
                    handleEditProject={handleEditProject}
                    handleDeleteProject={handleDeleteEntry}
                    handleMouseEnterProject={handleMouseEnterProject}
                    handleMouseLeaveProject={handleMouseLeaveProject}
                    buttonHoverProject={buttonHoverProject}
                    entryHoverProject={entryHoverProject}
                />
                <SkillsSection
                    skillsInfo={skillsInfo}
                    handleEditSkill={handleEditSkill}
                    handleDeleteSkill={handleDeleteEntry}
                    handleMouseEnterSkill={handleMouseEnterSkill}
                    handleMouseLeaveSkill={handleMouseLeaveSkill}
                    buttonHoverSkill={buttonHoverSkill}
                    entryHoverSkill={entryHoverSkill}
                />
            </div>
        </div>
    )
}

export default AllSections;