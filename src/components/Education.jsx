import "../styles/form.css"
import { useState } from "react";

function EducationFields({ handleSubmit, handleAddAdditionalInfo }) {
    function clearFormFields() {
        const inputFields = document.querySelectorAll("#educationForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <form 
            id="educationForm" 
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                clearFormFields();
            }} 
        >
            <label htmlFor="schoolName">Name of Institution</label>
            <input 
                type="text" 
                name="schoolName" 
                id="schoolName" 
                placeholder="Name of Institution" 
                required
            />
            <label htmlFor="location">Location</label>
            <input 
                type="text" 
                name="location" 
                id="location"
                placeholder="City, Country"
                pattern="[- A-Za-z]+, [- A-Za-z]+"
                required
            />
            <label htmlFor="titleOfStudy">Title of Study</label>
            <input 
                type="text" 
                name="titleOfStudy" 
                id="titleOfStudy" 
                placeholder="Title of Study" 
                required
            />
            <fieldset>
                <div className="start">
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        type="text"
                        name="startDate"
                        id="startDate"
                        placeholder="Start Date (Month Year)"
                        required
                    />
                </div>
                <div className="end">
                    <label htmlFor="endDate">End Date</label>
                    <input
                        type="text"
                        name="endDate"
                        id="endDate"
                        placeholder="End Date (Month Year)"
                        required
                    />
                </div>
            </fieldset>
            <fieldset className="additionalInfoFields">
                <legend>Additional Information (optional)</legend>
                <input
                    type="text"
                    name="additionalInfo"
                    placeholder="Additional info (e.g., relevant coursework)"
                />
            </fieldset>
            <button onClick={() => handleAddAdditionalInfo()} type="button">Add Additional Info</button>
            <button type="submit">{
                // editStatus 
                // ? "Update Information" 
                // : "Add Information"
                "Add Information"
            }</button>
        </form>
    )
}

function EducationSection({ educationInfo, handleEdit }) {
    const [buttonHoverStyle, setButtonHoverStyle] = useState({display: "none"});
    const [entryHoverStyle, setEntryHoverStyle] = useState({});
    
    function handleMouseEnter() {
        setButtonHoverStyle({display: "block"});
        setEntryHoverStyle({opacity: "50%"})
    }

    function handleMouseLeave() {
        setButtonHoverStyle({display: "none"});
        setEntryHoverStyle({})
    }

    return (
        <section className="educationWrapper">
            {educationInfo.map((entry, index) => {
                return (
                    <div 
                        className="educationEntry"
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        style={entryHoverStyle} 
                        id={"entry" + index}
                        key={"entry" + index}
                    >
                        <div className="educationDetails">
                            <p><b>{entry.schoolName}</b> | {entry.location}</p>
                            <p>{entry.startDate + " - " + entry.endDate}</p>
                        </div>
                        <p>{entry.titleOfStudy}</p>
                        {
                            /* Only add list if there is text to display */
                            entry.additionalInfo.some(text => text) &&
                            <ul>
                                {entry.additionalInfo.map((text, index) => {
                                    return (
                                        text && <li key={index}>{text}</li>
                                    )
                                })}
                            </ul>
                        }
                        <button 
                            style={buttonHoverStyle} 
                            className="editInfo" 
                            onClick={(e) => {
                                const entryId = e.target.parentNode.id.slice(-1);
                                handleEdit(entryId);
                            }}
                            type="button"
                        >
                            Edit
                        </button>
                    </div>
                )
            })}
        </section>
    )
}

export { EducationFields, EducationSection };