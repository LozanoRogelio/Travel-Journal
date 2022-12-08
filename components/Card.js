import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="image" src={props.imageUrl} alt="mount fiji"/>
            <div className="content">
                <div className="coordinates">
                    <i className="fa-sharp fa-solid fa-location-dot icon"></i>
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl}>View on Google MAPS</a>
                </div>
                <h1>{props.title}</h1>
                <h6><strong>{props.startDate} - {props.endDate}</strong></h6>
                <p>{props.description}</p>
                
            </div>
        </div>
    )
}