import React from "react";
import "./LowTemp.css";

const LowTemp = props => {
    return(<div className="lowTemp">
        <span>{props.lowTemp}°C</span>
    </div>)
}

export default LowTemp;