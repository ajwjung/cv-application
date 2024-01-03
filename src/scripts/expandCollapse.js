function expandCollapseForm(formId) {
    const form = document.querySelector(`#${formId}`);

    if (form.classList.contains("collapse")) {
        form.classList.remove("collapse");
    } else if (!form.classList.contains("collapse")) {
        form.classList.add("collapse");
    }
}

function onSave(formId, sectionName) {
    const form = document.querySelector(`#${formId}`);
    const skillsSection = document.querySelector(`.${sectionName}Wrapper`); 

    form.classList.add("collapse");
    skillsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start"
    })
}

export { expandCollapseForm, onSave };