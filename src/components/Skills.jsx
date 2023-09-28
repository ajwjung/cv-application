function SkillsSection({ skillsInfo, handleEditSkill, handleDeleteSkill, handleMouseEnterSkill, handleMouseLeaveSkill, buttonHoverSkill, entryHoverSkill }) {
    return (
        skillsInfo.length > 0 && <section className="skillsWrapper">
            <h2 className="skillsDivider">SKILLS</h2>
            <hr/>
            <ul>
                {skillsInfo.map((entry, index) => {
                    return (
                        <li 
                            className="skillsEntry"
                            onMouseEnter={(e) => {
                                const hoveredEntryId = e.target.closest(".skillsEntry").id.slice(-1);
                                handleMouseEnterSkill(Number(hoveredEntryId));
                            }} 
                            onMouseLeave={(e) => {
                                const hoveredEntryId = e.target.closest(".skillsEntry").id.slice(-1);
                                handleMouseLeaveSkill(Number(hoveredEntryId));
                            }}
                            id={"skill" + index}
                            key={"skill" + index}
                        >
                            <p 
                                className="skillsDetails" 
                                style={entryHoverSkill[index]}
                            >
                                <b>{entry.category}</b> {entry.listedSkills}
                            </p>
                            <div className="btns" style={buttonHoverSkill[index]}>
                                <button
                                    className="editInfo"
                                    onClick={(e) => {
                                        const entryId = e.target.closest(".skillsEntry").id.slice(-1);
                                        handleEditSkill(entryId);
                                    }}
                                    style={{margin: "10px"}}
                                    type="button"
                                >
                                    Edit
                                </button>
                                <button
                                    className="deleteInfo"
                                    onClick={(e) => {
                                        const entryId = e.target.closest(".skillsEntry").id.slice(-1);
                                        handleDeleteSkill(entryId);
                                    }}
                                    style={{margin: "10px"}}
                                    type="button"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default SkillsSection;