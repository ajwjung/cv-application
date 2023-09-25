import "../styles/form.css"
import { useState } from "react";
import { ExperienceFields } from "./FormFields";

// Component to create the generated CV
function ExperienceSection({ experienceInfo }) {
    return (
        <section className="experienceWrapper">
            {experienceInfo.map((entry, index) => {
                return (
                    <div 
                        className="jobEntry" 
                        id={"job" + index} 
                        key={"job" + index}
                    >
                        <div className="jobDetails">
                            <p><b>{entry.position}</b></p>
                            <p>{entry.startDate + " - " + entry.endDate}</p>
                        </div>
                        <p><b>{entry.company}</b> | {entry.location}</p>
                        <ul>
                            {entry.responsibilities.map((duty, index) => {
                                return (
                                    duty && <li key={index}>{duty}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}

// Component to display the form and generated CV
function Experience() {
    const [experienceInfo, setExperienceInfo] = useState([
        {
            id: 0,
            position: "Commander",
            company: "Scout Regiment",
            location: "Paradis",
            startDate: "Year 850",
            endDate: "Present",
            responsibilities: ["Repsonsibility 1", "Responsibility 2", "Responsibility 3"],
        }
    ])

    return (
        <>
            <h2>Experience</h2>
            <ExperienceFields />
            <ExperienceSection experienceInfo={experienceInfo} />
        </>
    )
}

export default Experience;