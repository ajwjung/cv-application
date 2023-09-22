import "../styles/App.css"

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

function EducationFields({ handleSubmit, handleAddAdditionalInfo, editStatus }) {
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
                editStatus 
                ? "Update Information" 
                : "Add Information"
            }</button>
        </form>
    )
}

export { GeneralFields, EducationFields };