import React from "react";
import "./App.css"
import { TiLocation } from "react-icons/ti"
import { BsArrowRight } from "react-icons/bs"

export default function Card({image, location, googleMaps, title, startDate, endDate, description} = props){
    return (
        <div className="card-box">
            <img src={image}/>
            <div className="card-info">
                <div className="card-location">
                    <p><TiLocation className="map-icon" size={18} color="#00296b"/>{location}</p>
                    <a href={googleMaps} target="_blank"><BsArrowRight className="arrow-icon"/><span>View on Google Maps</span></a>
                </div>
                <div className="card-desc">
                    <h2>{title}</h2>
                    <h4>{startDate} - {endDate}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}