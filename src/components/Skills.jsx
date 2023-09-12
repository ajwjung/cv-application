import "../styles/form.css"

function SkillsFields() {
    return (
        <form className="skillsForm" onSubmit={(e) => e.preventDefault()} action="#">
            <ul className="skillsList">
                <li>
                    <label htmlFor="skillCategory">Category</label>
                    <input
                        type="text"
                        name="skillCategory"
                        id="skillCategory"
                        placeholder="Skills category"
                    />
                    <label htmlFor="listOfSkills">Skill</label>
                    <input
                        type="text"
                        name="listOfSkills"
                        id="listOfSkills"
                        placeholder="List of skills (comma-separated)"
                    />
                </li>
                <li>
                    <label htmlFor="skillCategory">Category</label>
                    <input
                        type="text"
                        name="skillCategory"
                        id="skillCategory"
                        placeholder="Skills category"
                    />
                    <label htmlFor="listOfSkills">Skill</label>
                    <input
                        type="text"
                        name="listOfSkills"
                        id="listOfSkills"
                        placeholder="List of skills (comma-separated)"
                    />
                </li>
            </ul>
            <button type="button">Add Another Skill</button>
            <button type="submit">Add Skills</button>
        </form>
    )
}

export default SkillsFields;