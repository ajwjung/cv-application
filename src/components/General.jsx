import { useState } from "react";

function GeneralSection({ generalInfo, handleEditGeneral }) {
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
                <h2>{generalInfo.firstName + " " + generalInfo.lastName}</h2>
                <p>{generalInfo.email} • {generalInfo.phoneNumber}</p>
            </div>
            <button 
                style={buttonHoverStyle} 
                className="editInfo" 
                onClick={() => handleEditGeneral()}
                type="button"
            >
                Edit
            </button>
        </section>
    )
}

// function General() {
//     const [generalInfo, setGeneralInfo] = useState({
//         firstName: "John",
//         lastName: "Doe",
//         email: "johndoe@email.com",
//         phoneNumber: "111-111-1111",
//     });
//     const [editStatus, setEditStatus] = useState(false);

//     function handleGeneralSubmit() {
//         const form = document.forms.generalForm;
//         const formData = new FormData(form);
//         const formValues = Object.fromEntries(formData);

//         setGeneralInfo({
//             ...generalInfo, 
//             ...formValues, 
//         });

//         setEditStatus(false);
//     }

//     function handleGeneralEdit() {
//         const allGeneralInputs = document.querySelectorAll("#generalForm input");
//         const generalForm = document.getElementById("generalForm");

//         setEditStatus(true);

//         allGeneralInputs.forEach(input => {
//             switch (input.id) {
//                 case "firstName":
//                     input.value = generalInfo.firstName;
//                     break;
//                 case "lastName":
//                     input.value = generalInfo.lastName;
//                     break;
//                 case "email":
//                     input.value = generalInfo.email;
//                     break;
//                 case "phoneNumber":
//                     input.value = generalInfo.phoneNumber;
//                     break;
                
//             }
//         })

//         generalForm.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//             inline: "start"
//         });
//     }

//     return (
//         <>
//             <GeneralFields
//                 handleSubmit={handleGeneralSubmit}  
//                 editStatus={editStatus}
//             />
//             <GeneralSection
//                 generalInfo={generalInfo.firstName}
//                 handleEdit={handleGeneralEdit}
//             />
//         </>
//     )
// }

export default GeneralSection;