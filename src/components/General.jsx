import "../styles/form.css"

function GeneralFields({ handleSubmit }) {
    function clearFormFields() {
        const inputFields = document.querySelectorAll("#generalForm input")
        inputFields.forEach(input => input.value = "");
    }

    return (
        <form 
            id="generalForm" 
            action="" 
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
                clearFormFields();
            }}
        >
            <fieldset className="fullName">
                <div className="first">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className="last">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        required
                    />
                </div>
            </fieldset>
            <label htmlFor="email">Email Address</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email Address" 
                required
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input 
                type="tel" 
                name="phoneNumber" 
                id="phoneNumber" 
                placeholder="Phone Number" 
                required
            />
            <button type="submit">Add Information</button>
        </form>
    )
}

function GeneralSection({ firstName, lastName, email, phoneNumber }) {
    return (
        <section className="generalInfo">
            <h2>{firstName + " " + lastName}</h2>
            <p>{email}</p>
            <p>{phoneNumber}</p>
        </section>
    )
}

export { GeneralFields, GeneralSection };