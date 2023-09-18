import "../styles/form.css"
import { useState } from "react";

function GeneralFields({ handleSubmit, editStatus }) {
    function clearFormFields() {
        const inputFields = document.querySelectorAll("#generalForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <form 
            id="generalForm" 
            action="" 
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                clearFormFields();
            }}
        >
            <fieldset className="fullName">
                <div className="first">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className="last">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        required
                    />
                </div>
            </fieldset>
            <label htmlFor="email">Email Address</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email Address" 
                required
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
                type="tel" 
                name="phoneNumber" 
                id="phoneNumber" 
                placeholder="Phone Number" 
                required
            />
            <button className="saveInfo" type="submit">{
                editStatus 
                ? "Update Information" 
                : "Add Information"
            }</button>
        </form>
    )
}

function GeneralSection({ firstName, lastName, email, phoneNumber, handleEdit }) {
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
            className="generalWrapper"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <section className="generalInfo" style={sectionHoverStyle} >
                <h2>{firstName + " " + lastName}</h2>
                <p>{email}</p>
                <p>{phoneNumber}</p>
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

export { GeneralFields, GeneralSection };