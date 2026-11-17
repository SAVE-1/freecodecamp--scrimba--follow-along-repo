export default function DestinationEntry({
  countryName,
  locationName,
  locationImage,
  locationDescription,
  locationTimerange,
  locationGoogleMapsLink,
}) {
  return (
    <article className="destination">
      <img src={locationImage} alt="Location" />
      <div className="info-container">
        <span className="destination-country">📍{countryName}</span>
        <a className="destination-link" href={locationGoogleMapsLink}>View on Google Maps</a>
        <h2>{locationName}</h2>
        <p>{locationTimerange}</p>
        <p className="entry-text">{locationDescription}</p>
      </div>
    </article>
  );
}
