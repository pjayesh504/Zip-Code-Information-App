function LocationInfo(props) {
    return (
        <div className="location-info">
            <h2>Location Information</h2>
            {props.location.places.map((loc, index) => {
                return (
                    <div key={index} className="grid-info">
                        <p>
                            <strong>Country:</strong> {props.location.country}
                        </p>
                        <p>
                            <strong>State:</strong> {loc.state}
                        </p>
                        <p>
                            <strong>Place Name:</strong> {props.location.places[index]["place name"]}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
export default LocationInfo;
