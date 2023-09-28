/* eslint-disable react/prop-types */
import GeneralSection from "./General";
import EducationSection from "./Education"
import ExperienceSection from "./Experience"
import ProjectsSection from "./Projects"
import SkillsSection from "./Skills"

function AllSections({ 
    generalInfo, educationInfo, experienceInfo, projectsInfo, skillsInfo,
    handleEditGeneral, handleEditEducation, handleEditExperience, handleEditProject, handleEditSkill, 
    handleDeleteEducation, handleDeleteExperience, handleDeleteProject, handleDeleteSkill, 
    handleMouseEnterEducation, handleMouseEnterExperience, handleMouseEnterProject, handleMouseEnterSkill, 
    handleMouseLeaveEducation, handleMouseLeaveExperience, handleMouseLeaveProject, handleMouseLeaveSkill,
    buttonHoverEducation, buttonHoverExperience, buttonHoverProject, buttonHoverSkill, 
    entryHoverEducation, entryHoverExperience, entryHoverProject, entryHoverSkill
 }) {
    return (
        <div className="sectionsWrapper">
            <GeneralSection
                generalInfo={generalInfo}
                handleEditGeneral={handleEditGeneral}
            />
            <EducationSection
                educationInfo={educationInfo}
                handleEditEducation={handleEditEducation}
                handleDeleteEducation={handleDeleteEducation}
                handleMouseEnterEducation={handleMouseEnterEducation}
                handleMouseLeaveEducation={handleMouseLeaveEducation}
                buttonHoverEducation={buttonHoverEducation}
                entryHoverEducation={entryHoverEducation}
            />
            <ExperienceSection 
                experienceInfo={experienceInfo} 
                handleEditExperience={handleEditExperience}
                handleDeleteExperience={handleDeleteExperience}
                handleMouseEnterExperience={handleMouseEnterExperience}
                handleMouseLeaveExperience={handleMouseLeaveExperience}
                buttonHoverExperience={buttonHoverExperience}
                entryHoverExperience={entryHoverExperience}
            />
            <ProjectsSection 
                projectsInfo={projectsInfo}
                handleEditProject={handleEditProject}
                handleDeleteProject={handleDeleteProject}
                handleMouseEnterProject={handleMouseEnterProject}
                handleMouseLeaveProject={handleMouseLeaveProject}
                buttonHoverProject={buttonHoverProject}
                entryHoverProject={entryHoverProject}
            />
            <SkillsSection 
                skillsInfo={skillsInfo} 
                handleEditSkill={handleEditSkill}
                handleDeleteSkill={handleDeleteSkill}
                handleMouseEnterSkill={handleMouseEnterSkill}
                handleMouseLeaveSkill={handleMouseLeaveSkill}
                buttonHoverSkill={buttonHoverSkill}
                entryHoverSkill={entryHoverSkill}
            />
        </div>
    )
}

export default AllSections;