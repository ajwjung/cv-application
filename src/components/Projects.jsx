function ProjectsSection({ projectsInfo, handleEditProject, handleDeleteProject, handleMouseEnterProject, handleMouseLeaveProject, buttonHoverProject, entryHoverProject }) {
    return (
        projectsInfo.length > 0 && <section className="projectsWrapper">
            <h2 className="projectsDivider">PROJECTS</h2>
            <hr/>
            {projectsInfo.map((entry, index) => {
                return (
                    <div 
                        className="projectEntry" 
                        onMouseEnter={(e) => {
                            const hoveredEntryId = e.target.closest(".projectEntry").id.slice(-1);
                            handleMouseEnterProject(3, Number(hoveredEntryId));
                        }} 
                        onMouseLeave={(e) => {
                            const hoveredEntryId = e.target.closest(".projectEntry").id.slice(-1);
                            handleMouseLeaveProject(3, Number(hoveredEntryId));
                        }}
                        id={"project" + index} 
                        key={"project" + index}
                    >
                        <div 
                            className="projectDetails"
                            style={entryHoverProject[3][index]}
                        >
                            <p><b>{entry.projectName}</b></p>
                            <p><i>{entry.startDate + " - " + entry.endDate}</i></p>
                        </div>
                        {
                            <ul style={entryHoverProject[3][index]}>
                                {entry.descriptions.map((text, index) => {
                                    return (
                                        text && <li key={index}>{text}</li>
                                    )
                                })}
                            </ul>
                        }
                        <div className="btns" style={buttonHoverProject[3][index]}>
                            <button
                                className="editInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".projectEntry").id.slice(-1);
                                    handleEditProject(entryId);
                                }}
                                style={{margin: "10px"}}
                                type="button"
                            >
                                Edit
                            </button>
                            <button
                                className="deleteInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".projectEntry").id.slice(-1);
                                    handleDeleteProject("project", entryId);
                                }}
                                style={{margin: "10px"}}
                                type="button"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ProjectsSection;