import React from "react";

export default function Hero(props) {
    const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = props
    console.log(props)
    return (
        <section>
            <div className="container">
                <img className="hero-image" src={imageUrl} />
                <div className="hero-info">
                    <div className="hero-location">
                        <span><img className="location-logo" src="../images/location.png" alt="icon" /></span>
                        <span className="location">{location}</span>
                        <span className="google-maps"><a href={googleMapsUrl} target="_blank">View on Google Map</a></span>
                    </div>
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-date">{startDate} - {endDate}</p>
                    <p className="hero-text">{description}</p>
                </div>
            </div>
        </section >
    )
}