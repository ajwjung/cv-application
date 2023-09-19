import "../styles/form.css"
import { useState } from "react";

function EducationFields({ handleSubmit, editStatus }) {
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
            <label htmlFor="additionalInfo">Additional Information (optional)</label>
            <input 
                type="text" 
                name="additionalInfo"
                id="additionalInfo"
                placeholder="Additional info (e.g., relevant coursework)"
            />
            <button onClick={(e) => e.preventDefault()} type="button">Add Additional Info</button>
            <button type="submit">{
                editStatus 
                ? "Update Information" 
                : "Add Information"
            }</button>
        </form>
    )
}

function EducationSection({ educationInfo }) {
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
                            onClick={(e) => console.log(e.target.parentNode)}
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