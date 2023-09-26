import "../styles/form.css"
import { useState } from "react";
import { SkillsFields } from "./FormFields";

function SkillsSection({ skillsInfo }) {
    return (
        <section className="skillsWrapper">
            <ul>
                {skillsInfo.map((entry, index) => {
                    return (
                        <li 
                            className="skillsEntry"
                            id={"skill" + index}
                            key={"skill" + index}
                        >
                            <b>{entry.category}</b> {entry.listedSkills}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

function Skills() {
    const [skillsInfo, setSkillsInfo] = useState([
        {
            id: 0,
            category: "Special",
            listedSkills: "High agility, decision-making, problem-solving"
        }
    ]);

    return (
        <>
            <h2>Skills</h2>
            <SkillsFields />
            <SkillsSection skillsInfo={skillsInfo} />
        </>
    )
}

export default Skills;