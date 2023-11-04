import React, { useState } from "react";
// import { useForm } from "react-hook-form";

function PostalCodeForm(props) {
    const [postalCode, setPostalCode] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(postalCode);
    };

    const handleClear = () => {
        setPostalCode("");
        setError(null)
    };

    const handleChange = (event) => {
        if(event.target.value){
            setError(null)
        }
        if (event.target.value.length > 6) {
            setError("Please enter a valid 6-digit postal code.");
            setPostalCode(event.target.value);
        } else {
            setPostalCode(event.target.value);
            setError(null);
        }
    };
    return (
        <form className="postal-code-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="postal-code" className="label"><h2>Enter a Postal Code:</h2></label>       */}
            <input
                id="postal-code"
                placeholder="Enter a Postal Code"
                type="text"
                value={postalCode}
                onChange={handleChange}
            />
            <br></br>
            {error && <p className="error">{error}</p>}
            <button type="submit">Search</button>
            <button onClick={handleClear}>Clear</button>
        </form>
    );
}
export default PostalCodeForm;
