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
        setError(null);
    };

    const handleChange = (event) => {
        props.clearError();
        // if (event.target.value) {
        //     setError(null)
        // }
        if (event.target.value.length > 6) {
            setError("Please Enter A Valid 6-digit Postal Code");
            setPostalCode(event.target.value);
        } else {
            setPostalCode(event.target.value);
            setError(null);
        }
    };
    return (
        <form className="postal-code-form" onSubmit={handleSubmit}>
            {/* <label htmlFor="postal-code" className="label"><h2>Enter a Postal Code:</h2></label>  */}
            <div className="input-field">
                <input
                    className={error === null ? "" : "error"}
                    id="postal-code"
                    placeholder="Enter a Postal Code"
                    type="text"
                    value={postalCode}
                    onChange={handleChange}
                />
            {/* </div>
            <div> */}
                <button type="submit">Search</button>
                <button onClick={handleClear}>Clear</button>
            </div>
            <div className="abc">
                {error && <p className="error">{error}</p>}
            </div>
        </form>
    );
}
export default PostalCodeForm;
