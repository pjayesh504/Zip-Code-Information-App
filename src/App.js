import React, { useState } from "react";
import axios from "axios";
import LocationInfo from "./components/LocationInfo";
import PostalCodeForm from "./components/PostalCodeForm";
import "./App.css";
function App() {
  const [locationInfo, setLocationInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const clearError = () =>{
    setError(null);
  }

  const handleSearch = (postalCode) => {
    setError(null);
    setLoading(true);
    console.log("ABC")
    if (postalCode) {
      axios
        .get(`https://api.zippopotam.us/IN/${postalCode}`)
        .then((response) => {
          setLocationInfo(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLocationInfo(null);
          if (error?.response?.status === 404) {
            setError("No Location Found For This Postal Code");
          } else {
            setError("Something went wrong. Please try again later");
          }
          setLoading(false);
        });
    } else {
      setLoading(false);
      setLocationInfo(null);
      setError(null);
    }
  };

  return (
    <div className="App">
      <h1>Zip Code Information App</h1>
      <PostalCodeForm onSubmit={handleSearch} clearError={clearError}/>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {locationInfo && <LocationInfo location={locationInfo} />}
    </div>
  );
}

export default App;
