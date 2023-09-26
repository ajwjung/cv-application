import "../styles/form.css"
import { useState } from "react";
import { SkillsFields } from "./FormFields";

function SkillsSection({ skillsInfo, handleMouseEnter, handleMouseLeave, buttonHoverStyle, entryHoverStyle }) {
    return (
        <section className="skillsWrapper">
            <ul>
                {skillsInfo.map((entry, index) => {
                    return (
                        <li 
                            className="skillsEntry"
                            onMouseEnter={(e) => {
                                const hoveredEntryId = e.target.closest(".skillsEntry").id.slice(-1);
                                handleMouseEnter(Number(hoveredEntryId));
                            }} 
                            onMouseLeave={(e) => {
                                const hoveredEntryId = e.target.closest(".skillsEntry").id.slice(-1);
                                handleMouseLeave(Number(hoveredEntryId));
                            }}
                            id={"skill" + index}
                            key={"skill" + index}
                        >
                            <p 
                                className="skillsDetails" 
                                style={entryHoverStyle[index]}
                            >
                                <b>{entry.category}</b> {entry.listedSkills}
                            </p>
                            <div className="btns" style={buttonHoverStyle[index]}>
                                <button
                                    className="editInfo"
                                    onClick={(e) => {
                                        e.preventDefault()
                                    }}
                                    style={{margin: "10px"}}
                                    type="button"
                                >
                                    Edit
                                </button>
                                <button
                                    className="deleteInfo"
                                    onClick={(e) => {
                                        e.preventDefault()
                                    }}
                                    style={{margin: "10px"}}
                                    type="button"
                                >
                                    Delete
                                </button>
                            </div>
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
    const [buttonHoverStyle, setButtonHoverStyle] = useState([{ display: "none" }]);
    const [entryHoverStyle, setEntryHoverStyle] = useState([{}]);

    function handleMouseEnterSkill(entryId) {
        setButtonHoverStyle(
            buttonHoverStyle.map((buttonStyle, index) => {
                if (index === entryId) {
                    return ({ display: "block" });
                } else {
                    return buttonStyle;
                }
            })
        );
        setEntryHoverStyle(
            entryHoverStyle.map((entryStyle, index) => {
                if (index === entryId) {
                    return ({ opacity: "50%" });
                } else {
                    return entryStyle;
                }
            })
        )
    }

    function handleMouseLeaveSkill(entryId) {
        setButtonHoverStyle(
            buttonHoverStyle.map((buttonStyle, index) => {
                if (index === entryId) {
                    return ({ display: "none" });
                } else {
                    return buttonStyle;
                }
            })
        );
        setEntryHoverStyle(
            entryHoverStyle.map((entryStyle, index) => {
                if (index === entryId) {
                    return ({});
                } else {
                    return entryStyle;
                }
            })
        )
    }

    function handleSkillsSubmit() {
        const form = document.forms.skillsForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);
        
        // Submitting a new entry
        setSkillsInfo((prevState) => {
            return (
                [
                    ...prevState,
                    {
                        id: prevState.length,
                        category: formValues.skillCategory,
                        listedSkills: formValues.listOfSkills
                    }
                ]
            )
        });

        // Add another style element
        setButtonHoverStyle([
            ...buttonHoverStyle,
            { display: "none" }
        ])

        setEntryHoverStyle([
            ...entryHoverStyle,
            {}
        ])
    }

    return (
        <>
            <h2>Skills</h2>
            <SkillsFields 
                handleSubmit={handleSkillsSubmit}
            />
            <SkillsSection 
                skillsInfo={skillsInfo} 
                handleMouseEnter={handleMouseEnterSkill}
                handleMouseLeave={handleMouseLeaveSkill}
                buttonHoverStyle={buttonHoverStyle}
                entryHoverStyle={entryHoverStyle}
            />
        </>
    )
}

export default Skills;