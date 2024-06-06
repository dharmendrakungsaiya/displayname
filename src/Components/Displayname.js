import React, { useState } from "react";

const Displayname = () => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[errorMessage, setErrorMessage] = useState("");
    const[fullName, setFullName] = useState("")

    const handleFname = (e) => {
        setFirstName(e.target.value);
    }

    const handleLname = (e) => {
        setLastName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName === "" || lastName === ""){
            setErrorMessage("!Please fill out this field");
        } else {
            setErrorMessage("");
            setFullName(`${firstName} ${lastName}`)
            console.log("Form Submit");
        }
       }

    return(
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name
                    <input type="text" name="name" value={firstName} onChange={handleFname} />
                </label>
                <br/>
                <label>Last Name
                    <input type="text" name="name" value={lastName} onChange={handleLname} />
                </label>
                <br/>
                <p>{errorMessage}</p>
                <button type="submit">Submit</button>
                {fullName && <p>Full Name: {fullName}</p>}
            </form>
        </div>
    )
}

export default Displayname;