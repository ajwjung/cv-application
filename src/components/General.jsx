import { useState } from "react";
import { GeneralFields } from "./FormFields";

function GeneralSection({ firstName, lastName, email, phoneNumber, handleEdit }) {
    const [buttonHoverStyle, setButtonHoverStyle] = useState({display: "none"});
    const [sectionHoverStyle, setSectionHoverStyle] = useState({});
    
    function handleMouseEnter() {
        setButtonHoverStyle({display: "block"});
        setSectionHoverStyle({opacity: "50%"})
    }

    function handleMouseLeave() {
        setButtonHoverStyle({display: "none"});
        setSectionHoverStyle({})
    }

    return (
        <section 
            className="generalWrapper"
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="generalInfo" style={sectionHoverStyle} >
                <h2>{firstName + " " + lastName}</h2>
                <p>{email} • {phoneNumber}</p>
            </div>
            <button 
                style={buttonHoverStyle} 
                className="editInfo" 
                onClick={() => handleEdit()}
                type="button"
            >
                Edit
            </button>
        </section>
    )
}

function General() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@email.com",
        phoneNumber: "111-111-1111",
        isEdit: false,
    });

    function handleGeneralSubmit() {
        const form = document.forms.generalForm;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData);

        setGeneralInfo({
            ...generalInfo, 
            ...formValues, 
        });
    }

    function handleGeneralEdit() {
        const allGeneralInputs = document.querySelectorAll("#generalForm input");
        const generalForm = document.getElementById("generalForm");

        allGeneralInputs.forEach(input => {
            switch (input.id) {
                case "firstName":
                    input.value = generalInfo.firstName;
                    break;
                case "lastName":
                    input.value = generalInfo.lastName;
                    break;
                case "email":
                    input.value = generalInfo.email;
                    break;
                case "phoneNumber":
                    input.value = generalInfo.phoneNumber;
                    break;
                
            }
        })

        setGeneralInfo({
            ...generalInfo,
            isEdit: true
        });

        generalForm.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        });
    }

    return (
        <>
            <GeneralFields
                handleSubmit={handleGeneralSubmit}  
                editStatus={generalInfo.isEdit}
            />
            <GeneralSection
                firstName={generalInfo.firstName}
                lastName={generalInfo.lastName}
                email={generalInfo.email}
                phoneNumber={generalInfo.phoneNumber}
                handleEdit={handleGeneralEdit}
            />
        </>
    )
}

export default General;