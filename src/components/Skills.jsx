import "../styles/form.css"
import { useState } from "react";
import { SkillsFields } from "./FormFields";

function SkillsSection({ skillsInfo, handleEdit, handleMouseEnter, handleMouseLeave, buttonHoverStyle, entryHoverStyle }) {
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
                                        const entryId = e.target.closest(".skillsEntry").id.slice(-1);
                                        handleEdit(entryId);
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
    const [idOfEditedSkillEntry, setIdOfEditedSkillEntry] = useState();
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
        
        // Updating an edited entry
        if (typeof(idOfEditedSkillEntry) === "number") {
            setSkillsInfo(skillsInfo.map((entry, index) => {
                if (index === idOfEditedSkillEntry) {
                    return {
                        ...entry,
                        category: formValues.skillCategory,
                        listedSkills: formValues.listOfSkills,
                    }
                } else {
                    return entry;
                }
            }));
        } else {
            // Submitting a new entry
            setSkillsInfo((prevState) => {
                return (
                    [
                        ...prevState,
                        {
                            id: prevState.length,
                            category: formValues.skillCategory,
                            listedSkills: formValues.listOfSkills,
                        }
                    ]
                )
            });
    
            // Add another style element
            setButtonHoverStyle([
                ...buttonHoverStyle,
                { display: "none" }
            ]);
    
            setEntryHoverStyle([
                ...entryHoverStyle,
                {}
            ]);
        }
        
        setIdOfEditedSkillEntry("");
    }

    function handleSkillsEdit(entryDivId) {
        const entryToEdit = skillsInfo[entryDivId];
        const allInputFields = document.querySelectorAll("#skillsForm input");
        
        setIdOfEditedSkillEntry(Number(entryDivId));

        allInputFields.forEach(input => {
            switch (input.id) {
                case "skillCategory": 
                    input.value = entryToEdit.category;
                    break;
                case "listOfSkills": 
                    input.value = entryToEdit.listedSkills;
                    break;
                default:
                    input.value = "";
                    break;
            }
        });
    }

    return (
        <>
            <h2>Skills</h2>
            <SkillsFields 
                handleSubmit={handleSkillsSubmit}
                editStatus={typeof(idOfEditedSkillEntry) === "number"}
            />
            <SkillsSection 
                skillsInfo={skillsInfo} 
                handleEdit={handleSkillsEdit}
                handleMouseEnter={handleMouseEnterSkill}
                handleMouseLeave={handleMouseLeaveSkill}
                buttonHoverStyle={buttonHoverStyle}
                entryHoverStyle={entryHoverStyle}
            />
        </>
    )
}

export default Skills;