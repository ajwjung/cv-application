import "../styles/formFields.css"
import "../styles/generatedCv.css"

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
            <h2 className="generalHeading">General Information</h2>
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
            <h2 className="educationHeading">Education</h2>
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
            <button 
                onClick={() => handleAddAdditionalInfo()}
                className="addField"
                type="button"
            >
                Add Additional Info
            </button>
            <button className="saveInfo" type="submit">{
                editStatus 
                ? "Update Information" 
                : "Add Information"
            }</button>
        </form>
    )
}

function ExperienceFields({ handleSubmit, handleAddJobDuty, editStatus }) {
    function clearFormFields() {
        const inputFields = document.querySelectorAll("#experienceForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <form 
            id="experienceForm" 
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                clearFormFields();
            }} 
        >
            <h2 className="experienceHeading">Experience</h2>
            <label htmlFor="company">Company Name</label>
            <input 
                type="text" 
                name="company" 
                id="company" 
                placeholder="Company Name"
                required
            />
            <label htmlFor="companyLocation">Location</label>
            <input 
                type="text" 
                name="companyLocation" 
                id="companyLocation"
                placeholder="City, Country"
                pattern="[ \-A-Za-z]+, [ \-A-Za-z]+"
                required
            />
            <label htmlFor="position">Position</label>
            <input 
                type="text" 
                name="position" 
                id="position" 
                placeholder="Position Title"
                required
            />
            <fieldset>
                <div className="start">
                    <label htmlFor="jobStartDate">Start Date</label>
                    <input
                        type="text"
                        name="jobStartDate"
                        id="jobStartDate"
                        placeholder="Start Date (Month Year)"
                        required
                    />
                </div>
                <div className="end">
                    <label htmlFor="jobEndDate">End Date</label>
                    <input
                        type="text"
                        name="jobEndDate"
                        id="jobEndDate"
                        placeholder="End Date (Month Year)"
                        required
                    />
                </div>
            </fieldset>
            <fieldset className="jobDuties">
                <legend>Core Responsibilities (3 required)</legend>
                <input
                    type="text"
                    name="jobDuty"
                    placeholder="A short description of one core responsibility"
                    required
                />
                <input
                    type="text"
                    name="jobDuty"
                    placeholder="A short description of one core responsibility"
                    required
                />
                <input
                    type="text"
                    name="jobDuty"
                    placeholder="A short description of one core responsibility"
                    required
                />
            </fieldset>
            <button 
                onClick={() => handleAddJobDuty()}
                className="addField" 
                type="button"
            >
                Add Another Responsibility
            </button>
            <button className="saveInfo" type="submit">{
                editStatus 
                ? "Update Information" 
                : "Add Information"
            }</button>
        </form>
    )
}

function ProjectsFields({ handleSubmit, handleAddDescription, editStatus }) {
    function clearFormFields() {
        const inputFields = document.querySelectorAll("#projectsForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <form 
            id="projectsForm" 
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                clearFormFields();
            }} 
        >
            <h2 className="projectsHeading">Projects</h2>
            <label htmlFor="projectName">Project Name</label>
            <input 
                type="text" 
                name="projectName" 
                id="projectName"
                placeholder="Project Name" 
                required
            />
            <fieldset>
                <div className="start">
                    <label htmlFor="projectStartDate">Start Date</label>
                    <input
                        type="text"
                        name="projectStartDate"
                        id="projectStartDate"
                        placeholder="Start Date (Month Year)"
                        required
                    />
                </div>
                <div className="end">
                    <label htmlFor="projectEndDate">End Date</label>
                    <input
                        type="text"
                        name="projectEndDate"
                        id="projectEndDate"
                        placeholder="End Date (Month Year)"
                        required
                    />
                </div>
            </fieldset>
            <fieldset className="projectDescriptions">
                <legend>Project Description (at least 1 required)</legend>
                <input
                    type="text"
                    name="projectDescription"
                    placeholder="A short description about one feature of your project"
                    required
                />
            </fieldset>
            <button 
                onClick={() => handleAddDescription()} 
                className="addField"
                type="button">
                    Add Another Description
                </button>
            <button className="saveInfo" type="submit">{
                editStatus 
                ? "Update Information" 
                : "Add Information"
            }</button>
        </form>
    )
}

function SkillsFields({ handleSubmit, editStatus }) {
    function clearFormFields() {
        const inputFields = document.querySelectorAll("#skillsForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <form 
            id="skillsForm" 
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                clearFormFields();
            }} 
        >
            <h2 className="skillsHeading">Skills</h2>
            <fieldset className="skillsList">
                <div className="skillCategory">
                    <label htmlFor="skillCategory">Category</label>
                    <input
                        type="text"
                        name="skillCategory"
                        id="skillCategory"
                        placeholder="Skills category (e.g., technical)"
                        />
                </div>
                <div className="skillInfo">
                    <label htmlFor="listOfSkills">Skill</label>
                    <input
                        type="text"
                        name="listOfSkills"
                        id="listOfSkills"
                        placeholder="List of skills (comma-separated)"
                    />
                </div>
            </fieldset>
            <button className="saveInfo" type="submit">{
                editStatus 
                ? "Update Information" 
                : "Add Information"
            }</button>
        </form>
    )
}
export { GeneralFields, EducationFields, ExperienceFields, ProjectsFields, SkillsFields };