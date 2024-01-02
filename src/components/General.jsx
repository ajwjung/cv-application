import PropTypes from "prop-types";

function GeneralSection({ generalInfo, handleEditGeneral, handleMouseEnterGeneral, handleMouseLeaveGeneral, buttonHoverGeneral, entryHoverGeneral }) {
    return (
        <section 
            className="generalWrapper"
            onMouseEnter={() => {
                // sectionId = 0 and entryId = 0 (there's always only one entry)
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

GeneralSection.propTypes = {
    generalInfo: PropTypes.shape({
        email: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string, 
        phoneNumber: PropTypes.string,
    }),
    handleEditGeneral: PropTypes.func,
    handleMouseEnterGeneral: PropTypes.func,
    handleMouseLeaveGeneral: PropTypes.func,
    buttonHoverGeneral: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
    entryHoverGeneral: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
}

export default GeneralSection;