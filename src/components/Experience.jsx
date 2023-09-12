import "../styles/form.css"

function ExperienceFields() {
    return (
        <form className="experienceForm" onSubmit={(e) => e.preventDefault()} action="#">
            <label htmlFor="company">Company Name</label>
            <input 
                type="text" 
                name="company" 
                id="company" 
                placeholder="Company Name"
            />
            <label htmlFor="position">Position</label>
            <input 
                type="text" 
                name="position" 
                id="position" 
                placeholder="Position Title"
            />
            <fieldset className="dates">
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
            <fieldset className="jobExperience">
                <label htmlFor="jobDuty">Core Responsibilities</label>
                <input
                    type="text"
                    name="jobDuty"
                    id="jobDuty"
                    placeholder="A short description of one core responsibility"
                />
                <input
                    type="text"
                    name="jobDuty"
                    id="jobDuty"
                    placeholder="A short description of one core responsibility"
                />
                <input
                    type="text"
                    name="jobDuty"
                    id="jobDuty"
                    placeholder="A short description of one core responsibility"
                />
            </fieldset>
            <button type="button">Add Another Responsibility</button>
            <button type="submit">Add Experience</button>
        </form>
    )
}

export default ExperienceFields;