import React from "react";
import "./WeatherImage.css";

const WeatherImage = (props) => {
    return(<div className="imgDiv"><img className="imageWeather" src={props.imageSrc} alt="sun"></img></div>);
}

export default WeatherImage;