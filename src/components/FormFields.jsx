import { useState } from "react";
import PropTypes from "prop-types";
import { expandCollapseForm, onSave } from "../scripts/expandCollapse";
import Icon from '@mdi/react';
import { mdiChevronUp, mdiChevronDown } from '@mdi/js';
import "../styles/formFields.css";
import "../styles/generatedCv.css";

function GeneralFields({ handleSubmitGeneral, editGeneralStatus }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function clearFormFields() {
        const inputFields = document.querySelectorAll("#generalForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <div>
            <button
                onClick={() => {
                    expandCollapseForm("generalForm");
                    setIsCollapsed(!isCollapsed);
                }}
                className="toggleFormField"
                type="button"
            >
                General Information
                {isCollapsed
                    ? <Icon className="expandCollapseIcon" path={mdiChevronDown} />
                    : <Icon className="expandCollapseIcon" path={mdiChevronUp} />}
            </button>
            <form
                id="generalForm"
                className="collapse"
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitGeneral();
                    clearFormFields();
                }}
            >
                <fieldset className="fullName">
                    <div className="first">
                        <label htmlFor="firstName">
                            First Name
                            <span className="requiredAsterisk" aria-label="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className="last">
                        <label htmlFor="lastName">
                            Last Name
                            <span className="requiredAsterisk" aria-label="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            required
                        />
                    </div>
                </fieldset>
                <label htmlFor="email">
                    Email Address
                    <span className="requiredAsterisk" aria-label="required">*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    required
                />
                <label htmlFor="phoneNumber">
                    Phone Number
                    <span className="requiredAsterisk" aria-label="required">*</span>
                </label>
                <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    required
                />
                <button onClick={() => {
                    onSave("generalForm", "general");
                    setIsCollapsed(true);
                }} className="saveInfo" type="submit">{
                    editGeneralStatus
                        ? "Update Information"
                        : "Add Information"
                }</button>
            </form>
        </div>
    )
}

GeneralFields.propTypes = {
    handleSubmitGeneral: PropTypes.func,
    editGeneralStatus: PropTypes.bool,
}

function EducationFields({ handleSubmitEducation, handleAddAdditionalInfo, editEducationStatus }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function clearFormFields() {
        const inputFields = document.querySelectorAll("#educationForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <div>
            <button
                onClick={() => {
                    expandCollapseForm("educationForm");
                    setIsCollapsed(!isCollapsed);
                }}
                className="toggleFormField"
                type="button"
            >
                Education Information
                {isCollapsed
                    ? <Icon className="expandCollapseIcon" path={mdiChevronDown} />
                    : <Icon className="expandCollapseIcon" path={mdiChevronUp} />}
            </button>
            <form
                id="educationForm"
                className="collapse"
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitEducation();
                    clearFormFields();
                }}
            >
                <label htmlFor="schoolName">
                    Name of Institution
                    <span className="requiredAsterisk" aria-label="required">*</span>
                </label>
                <input
                    type="text"
                    name="schoolName"
                    id="schoolName"
                    placeholder="Name of Institution"
                    required
                />
                <label htmlFor="location">
                    Location
                    <span className="requiredAsterisk" aria-label="required">*</span>
                </label>
                <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="City, Country"
                    pattern="[- A-Za-z]+, [- A-Za-z]+"
                    required
                />
                <label htmlFor="titleOfStudy">
                    Title of Study
                    <span className="requiredAsterisk" aria-label="required">*</span>
                </label>
                <input
                    type="text"
                    name="titleOfStudy"
                    id="titleOfStudy"
                    placeholder="Title of Study"
                    required
                />
                <fieldset>
                    <div className="start">
                        <label htmlFor="startDate">
                            Start Date
                            <span className="requiredAsterisk" aria-label="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="startDate"
                            id="startDate"
                            placeholder="Start Date (Month Year)"
                            required
                        />
                    </div>
                    <div className="end">
                        <label htmlFor="endDate">
                            End Date
                            <span className="requiredAsterisk" aria-label="required">*</span>
                        </label>
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
                <button onClick={() => {
                    onSave("educationForm", "education");
                    setIsCollapsed(true);
                }} className="saveInfo" type="submit">{
                    editEducationStatus
                        ? "Update Information"
                        : "Add Information"
                }</button>
            </form>
        </div>
    )
}

EducationFields.propTypes = {
    handleSubmitEducation: PropTypes.func,
    handleAddAdditionalInfo: PropTypes.func,
    editEducationStatus: PropTypes.bool,
}

function ExperienceFields({ handleSubmitExperience, handleAddJobDuty, editJobStatus }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function clearFormFields() {
        const inputFields = document.querySelectorAll("#experienceForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <div>
            <button
                onClick={() => {
                    expandCollapseForm("experienceForm");
                    setIsCollapsed(!isCollapsed);
                }}
                className="toggleFormField"
                type="button"
            >
                Experience Information
                {isCollapsed
                    ? <Icon className="expandCollapseIcon" path={mdiChevronDown} />
                    : <Icon className="expandCollapseIcon" path={mdiChevronUp} />}
            </button>
            <form
                id="experienceForm"
                className="collapse"
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitExperience();
                    clearFormFields();
                }}
            >
                <label htmlFor="company">
                    Company Name
                    <span className="requiredAsterisk" aria-label="required">*</span>
                </label>
                <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company Name"
                    required
                />
                <label htmlFor="companyLocation">
                    Location
                    <span className="requiredAsterisk" aria-label="required">*</span>
                </label>
                <input
                    type="text"
                    name="companyLocation"
                    id="companyLocation"
                    placeholder="City, Country"
                    pattern="[ \-A-Za-z]+, [ \-A-Za-z]+"
                    required
                />
                <label htmlFor="position">
                    Position
                    <span className="requiredAsterisk" aria-label="required">*</span>
                </label>
                <input
                    type="text"
                    name="position"
                    id="position"
                    placeholder="Position Title"
                    required
                />
                <fieldset>
                    <div className="start">
                        <label htmlFor="jobStartDate">
                            Start Date
                            <span className="requiredAsterisk" aria-label="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="jobStartDate"
                            id="jobStartDate"
                            placeholder="Start Date (Month Year)"
                            required
                        />
                    </div>
                    <div className="end">
                        <label htmlFor="jobEndDate">
                            End Date
                            <span className="requiredAsterisk" aria-label="required">*</span>
                        </label>
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
                    <legend>
                        Core Responsibilities (3 required)
                        <span className="requiredAsterisk" aria-label="required">*</span>
                    </legend>
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
                <button onClick={() => {
                    onSave("experienceForm", "experience");
                    setIsCollapsed(true);
                }} className="saveInfo" type="submit">{
                    editJobStatus
                        ? "Update Information"
                        : "Add Information"
                }</button>
            </form>
        </div>
    )
}

ExperienceFields.propTypes = {
    handleSubmitExperience: PropTypes.func,
    handleAddJobDuty: PropTypes.func,
    editJobStatus: PropTypes.bool,
}

function ProjectsFields({ handleSubmitProject, handleAddDescription, editProjectStatus }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function clearFormFields() {
        const inputFields = document.querySelectorAll("#projectsForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <div>
            <button
                onClick={() => {
                    expandCollapseForm("projectsForm");
                    setIsCollapsed(!isCollapsed);
                }}
                className="toggleFormField"
                type="button"
            >
                Projects Information
                {isCollapsed
                    ? <Icon className="expandCollapseIcon" path={mdiChevronDown} />
                    : <Icon className="expandCollapseIcon" path={mdiChevronUp} />}
            </button>
            <form
                id="projectsForm"
                className="collapse"
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitProject();
                    clearFormFields();
                }}
            >
                <label htmlFor="projectName">
                    Project Name
                    <span className="requiredAsterisk" aria-label="required">*</span>
                </label>
                <input
                    type="text"
                    name="projectName"
                    id="projectName"
                    placeholder="Project Name"
                    required
                />
                <fieldset>
                    <div className="start">
                        <label htmlFor="projectStartDate">
                            Start Date
                            <span className="requiredAsterisk" aria-label="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="projectStartDate"
                            id="projectStartDate"
                            placeholder="Start Date (Month Year)"
                            required
                        />
                    </div>
                    <div className="end">
                        <label htmlFor="projectEndDate">
                            End Date
                            <span className="requiredAsterisk" aria-label="required">*</span>
                        </label>
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
                    <legend>
                        Project Description (at least 1 required)
                        <span className="requiredAsterisk" aria-label="required">*</span>
                    </legend>
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
                <button onClick={() => {
                    onSave("projectsForm", "projects");
                    setIsCollapsed(true);
                }} className="saveInfo" type="submit">{
                    editProjectStatus
                        ? "Update Information"
                        : "Add Information"
                }</button>
            </form>
        </div>
    )
}

ProjectsFields.propTypes = {
    handleSubmitProject: PropTypes.func,
    handleAddDescription: PropTypes.func,
    editProjectStatus: PropTypes.bool,
}

function SkillsFields({ handleSubmitSkill, editSkillStatus }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    function clearFormFields() {
        const inputFields = document.querySelectorAll("#skillsForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <div>
            <button
                onClick={() => {
                    expandCollapseForm("skillsForm");
                    setIsCollapsed(!isCollapsed);
                }}
                className="toggleFormField"
                type="button"
            >
                Skills
                {isCollapsed
                    ? <Icon className="expandCollapseIcon" path={mdiChevronDown} />
                    : <Icon className="expandCollapseIcon" path={mdiChevronUp} />}
            </button>
            <form
                id="skillsForm"
                className="collapse"
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitSkill();
                    clearFormFields();
                }}
            >
                <fieldset className="skillsList">
                    <div className="skillCategory">
                        <label htmlFor="skillCategory">
                            Category
                            <span className="requiredAsterisk" aria-label="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="skillCategory"
                            id="skillCategory"
                            placeholder="Skills category (e.g., technical)"
                            required
                        />
                    </div>
                    <div className="skillInfo">
                        <label htmlFor="listOfSkills">
                            Skill
                            <span className="requiredAsterisk" aria-label="required">*</span>
                        </label>
                        <input
                            type="text"
                            name="listOfSkills"
                            id="listOfSkills"
                            placeholder="List of skills (comma-separated)"
                            required
                        />
                    </div>
                </fieldset>
                <button onClick={() => {
                    onSave("skillsForm", "skills");
                    setIsCollapsed(true);
                }} className="saveInfo" type="submit">{
                    editSkillStatus
                        ? "Update Information"
                        : "Add Information"
                }</button>
            </form>
        </div>
    )
}

SkillsFields.propTypes = {
    handleSubmitSkill: PropTypes.func,
    editSkillStatus: PropTypes.bool,
}

export { GeneralFields, EducationFields, ExperienceFields, ProjectsFields, SkillsFields };