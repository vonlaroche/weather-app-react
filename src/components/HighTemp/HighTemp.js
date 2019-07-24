import React from "react";
import "./HighTemp.css";

const HighTemp = props => {
    return(<div className="highTemp">
        <span>{props.highTemp}°C</span>
    </div>)
}

export default HighTemp;