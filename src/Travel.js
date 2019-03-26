import React from "react";

const Travel = ({ destination, country, photo, distance}) => (
    <figure>
        <img src={photo} alt={country} />
        <figcaption>
            <blockquote>{destination}</blockquote>
            <h1>{country}</h1>
            <h3>{distance}</h3>

        </figcaption>
    </figure>
);

export default Travel;