import "../styles/form.css"

function GeneralFields() {
    return (
        <form className="generalForm" onSubmit={(e) => e.preventDefault()} action="#">
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
                type="number" 
                name="phoneNumber" 
                id="phoneNumber" 
                placeholder="Phone Number" 
                required
            />
            <button type="submit">Add Information</button>
        </form>
    )
}

export default GeneralFields;