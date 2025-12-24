const GoogleMap = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5447891823144!2d72.83947631490107!3d19.037638987111186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4d3c973%3A0x1c1c1c1c1c1c1c1c!2sMahim%20West%2C%20Mumbai%2C%20Maharashtra%20400016!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"

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