import "../styles/form.css"

function EducationFields() {
    return (
        <form className="educationForm" onSubmit={(e) => e.preventDefault()} action="#">
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
                pattern="[A-Za-z -]+, [A-Za-z -]+"
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
                    <label htmlFor="startDate">Start Date (Month/Year)</label>
                    <input
                        type="text"
                        name="startDate"
                        id="startDate"
                        placeholder="Start Date"
                        required
                    />
                </div>
                <div className="end">
                    <label htmlFor="endDate">End Date (Month/Year)</label>
                    <input
                        type="text"
                        name="endDate"
                        id="endDate"
                        placeholder="End Date"
                        required
                    />
                </div>
            </fieldset>
            <button type="submit">Add Education</button>
        </form>
    )
}

export default EducationFields;