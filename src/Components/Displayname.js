import React, { useState } from "react";

const Displayname = () => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[fullName, setFullName] = useState("")
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const handleFname = (e) => {
        setFirstName(e.target.value);
    }

    const handleLname = (e) => {
        setLastName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === "") {
            setFirstNameError("!Please fill out this field");
        } else {
            setFirstNameError("");
        }

        if (lastName === "") {
            setLastNameError("!Please fill out this field");
        } else {
            setLastNameError("");
        }

        if (firstName !== "" && lastName !== "") {
            setFullName(`${firstName} ${lastName}`);
        }
    };

    return(
        <div>
            <h1>Full Name Display</h1>
            <form onSubmit={handleSubmit}>
                <label>First Name :
                    <input type="text" name="name" value={firstName} onChange={handleFname} />
                    {firstNameError && (
                        <span style={{ color: "red" }}>{firstNameError}</span>
                    )}
                </label>
                <br/>
                <label>Last Name :
                    <input type="text" name="name" value={lastName} onChange={handleLname} />
                    {lastNameError && (
                        <span style={{ color: "red" }}>{lastNameError}</span>
                    )}
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
            {fullName && <p>Full Name: {fullName}</p>}
        </div>
    )
}

export default Displayname;



