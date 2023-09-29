function GeneralSection({ generalInfo, handleEditGeneral, handleMouseEnterGeneral, handleMouseLeaveGeneral, buttonHoverGeneral, entryHoverGeneral }) {
    return (
        <section 
            className="generalWrapper"
            onMouseEnter={() => {
                // sectionId = 0 and entryId = 0 (always only one entry)
                handleMouseEnterGeneral(0, 0)
            }} 
            onMouseLeave={() => {
                handleMouseLeaveGeneral(0, 0)
            }}
        >
            <div className="generalInfo" style={entryHoverGeneral[0][0]} >
                <h2>{generalInfo.firstName + " " + generalInfo.lastName}</h2>
                <p>{generalInfo.email} • {generalInfo.phoneNumber}</p>
            </div>
            <button 
                style={buttonHoverGeneral[0][0]} 
                className="editInfo" 
                onClick={() => handleEditGeneral()}
                type="button"
            >
                Edit
            </button>
        </section>
    )
}

export default GeneralSection;