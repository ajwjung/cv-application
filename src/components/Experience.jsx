import PropTypes from "prop-types";

function ExperienceSection({ experienceInfo, handleEditExperience, handleDeleteExperience, handleMouseEnterExperience, handleMouseLeaveExperience, buttonHoverExperience, entryHoverExperience }) {
    return (
        <section className="experienceWrapper">
            <h2 className="experienceDivider">EXPERIENCE</h2>
            <hr/>
            {experienceInfo.map((entry, index) => {
                return (
                    <div 
                        className="jobEntry" 
                        onMouseEnter={(e) => {
                            const hoveredEntryId = e.target.closest(".jobEntry").id.slice(-1);
                            handleMouseEnterExperience(2, Number(hoveredEntryId));
                        }}
                        onMouseLeave={(e) => {
                            const hoveredEntryId = e.target.closest(".jobEntry").id.slice(-1);
                            handleMouseLeaveExperience(2, Number(hoveredEntryId));
                        }}
                        id={"job" + index} 
                        key={"job" + index}
                    >
                        <div 
                            className="jobDetails"
                            style={entryHoverExperience[2][index]}
                        >
                            <p><b>{entry.position}</b></p>
                            <p><i>{entry.startDate + " - " + entry.endDate}</i></p>
                        </div>
                        <p
                            style={entryHoverExperience[2][index]} 
                        >
                            {entry.company} | {entry.location}
                        </p>
                        <ul style={entryHoverExperience[2][index]}>
                            {entry.responsibilities.map((duty, index) => {
                                return (
                                    duty && <li key={index}>{duty}</li>
                                )
                            })}
                        </ul>
                        <div className="btns" style={buttonHoverExperience[2][index]}>
                            <button
                                className="editInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".jobEntry").id.slice(-1);
                                    handleEditExperience(entryId);
                                }}
                                style={{margin: "10px"}}
                                type="button"
                            >
                                Edit
                            </button>
                            <button
                                className="deleteInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".jobEntry").id.slice(-1);
                                    handleDeleteExperience("experience", entryId);
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

ExperienceSection.propTypes = {
    experienceInfo: PropTypes.arrayOf(PropTypes.object),
    handleEditExperience: PropTypes.func,
    handleDeleteExperience: PropTypes.func,
    handleMouseEnterExperience: PropTypes.func,
    handleMouseLeaveExperience: PropTypes.func,
    buttonHoverExperience: PropTypes.arrayOf(PropTypes.array),
    entryHoverExperience: PropTypes.arrayOf(PropTypes.array),
}

export default ExperienceSection;