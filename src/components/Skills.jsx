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
                                handleMouseEnterSkill(4, Number(hoveredEntryId));
                            }} 
                            onMouseLeave={(e) => {
                                const hoveredEntryId = e.target.closest(".skillsEntry").id.slice(-1);
                                handleMouseLeaveSkill(4, Number(hoveredEntryId));
                            }}
                            id={"skill" + index}
                            key={"skill" + index}
                        >
                            <p 
                                className="skillsDetails" 
                                style={entryHoverSkill[4][index]}
                            >
                                <b>{entry.category}</b> {entry.listedSkills}
                            </p>
                            <div className="btns" style={buttonHoverSkill[4][index]}>
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
                                        handleDeleteSkill("skill", entryId);
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