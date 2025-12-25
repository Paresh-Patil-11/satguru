const GoogleMap = () => {
const mapSrc =
  "https://www.google.com/maps?q=19.035361,72.846806&output=embed";

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sadguru Staffing Solutions Location - Mahim West, Mumbai"
      ></iframe>
    </div>
  )
}

export default GoogleMap