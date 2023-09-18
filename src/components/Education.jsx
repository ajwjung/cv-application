import "../styles/form.css"
import { useState } from "react";

function EducationFields({ handleSubmit, additionalInfo, handleAddEducationInput, editStatus }) {
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
            <fieldset>
                <legend>Additional Info (optional)</legend>
                {additionalInfo.length === 0
                    ? <input 
                        type="text" 
                        name="additionalInfo"
                        id="additionalInfo0"
                        placeholder="Additional info (e.g., relevant coursework)"
                    />
                    : additionalInfo.map((infoField) => {
                    return (
                        <input 
                            type="text" 
                            name="additionalInfo"
                            id={"additionalInfo" + infoField.id} 
                            key={infoField.id}
                            placeholder="Additional info (e.g., relevant coursework)"
                        />
                    )
                })}
            </fieldset>
            <button onClick={() => {handleAddEducationInput(); console.log("additional", additionalInfo)}} type="button">Add Additional Info</button>
            <button type="submit">{
                editStatus 
                ? "Update Information" 
                : "Add Information"
            }</button>
        </form>
    )
}

function EducationSection({ schoolName, location, titleOfStudy, startDate, endDate, additionalInfo, handleEdit }) {
    const [buttonHoverStyle, setButtonHoverStyle] = useState({display: "none"});
    const [sectionHoverStyle, setSectionHoverStyle] = useState({});
    
    function handleMouseEnter() {
        setButtonHoverStyle({display: "block"});
        setSectionHoverStyle({opacity: "50%"})
    }

    function handleMouseLeave() {
        setButtonHoverStyle({display: "none"});
        setSectionHoverStyle({})
    }

    return (
        <div 
            className="educationWrapper"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <section className="educationInfo" style={sectionHoverStyle} >
                <div className="educationDetails">
                    <p><b>{schoolName}</b> | {location}</p>
                    <p>{startDate + " - " + endDate}</p>
                </div>
                <p>{titleOfStudy}</p>
                {/* Only add list if there is text to display */}
                {
                    additionalInfo.some(info => info.text) && 
                    <ul>
                        {additionalInfo.map(info => {
                            return (info.text && <li key={info.id}>{info.text}</li>)
                        })}
                    </ul>
                }
            </section>
            <button 
                style={buttonHoverStyle} 
                className="editInfo" 
                onClick={() => handleEdit()}
                type="button"
            >
                Edit
            </button>
        </div>
    )
}

export { EducationFields, EducationSection };