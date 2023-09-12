import "../styles/form.css"

function ProjectFields() {
    return (
        <form className="projectsForm" onSubmit={(e) => e.preventDefault()} action="#">
            <label htmlFor="projectName">Project Name</label>
            <input 
                type="text" 
                name="projectName" 
                id="projectName" placeholder="Project Name" 
            />
            <label htmlFor="projectDescription">Project Description</label>
            <ul>
                <li>
                    <input
                        type="text"
                        name="projectDescription"
                        id="projectDescription"
                        placeholder="A short description about one feature of your project"
                    />
                </li>
                <li>
                    <input
                        type="text"
                        name="projectDescription"
                        id="projectDescription"
                        placeholder="A short description about one feature of your project"
                    />
                </li>
            </ul>
            <button type="button">Add Another Description</button>
            <button type="submit">Add Project</button>
        </form>
    )
}

export default ProjectFields;