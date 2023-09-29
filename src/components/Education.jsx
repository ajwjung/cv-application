function EducationSection({ educationInfo, handleEditEducation, handleDeleteEducation, handleMouseEnterEducation, handleMouseLeaveEducation, buttonHoverEducation, entryHoverEducation }) {
    return (
        <section className="educationWrapper">
            <h2 className="educationDivider">EDUCATION</h2>
            <hr/>
            {educationInfo.map((entry, index) => {
                return (
                    <div 
                        className="educationEntry"
                        onMouseEnter={(e) => {
                            const hoveredEntryId = e.target.closest(".educationEntry").id.slice(-1);
                            handleMouseEnterEducation(1, Number(hoveredEntryId));
                        }} 
                        onMouseLeave={(e) => {
                            const hoveredEntryId = e.target.closest(".educationEntry").id.slice(-1);
                            handleMouseLeaveEducation(1, Number(hoveredEntryId));
                        }}
                        id={"entry" + index}
                        key={"entry" + index}
                    >
                        <div 
                            className="educationDetails"
                            style={entryHoverEducation[1][index]} 
                        >
                            <p><b>{entry.schoolName}</b> | {entry.location}</p>
                            <p><i>{entry.startDate + " - " + entry.endDate}</i></p>
                        </div>
                        <p
                            style={entryHoverEducation[1][index]} 
                        >{entry.titleOfStudy}</p>
                        {
                            /* Only add list if there is text to display */
                            entry.additionalInfo.some(text => text) &&
                            <ul style={entryHoverEducation[1][index]}>
                                {entry.additionalInfo.map((text, index) => {
                                    return (
                                        text && <li key={index}>{text}</li>
                                    )
                                })}
                            </ul>
                        }
                        <div className="btns" style={buttonHoverEducation[1][index]}>
                            <button
                                className="editInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".educationEntry").id.slice(-1);
                                    handleEditEducation(entryId);
                                }}
                                style={{margin: "10px"}}
                                type="button"
                            >
                                Edit
                            </button>
                            <button
                                className="deleteInfo"
                                onClick={(e) => {
                                    const entryId = e.target.closest(".educationEntry").id.slice(-1);
                                    handleDeleteEducation("education", entryId);
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

export default EducationSection;