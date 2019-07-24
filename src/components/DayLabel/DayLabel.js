import React from "react";
import "./DayLabel.css";

const DayLabel = props => {
    return(<div className="dayLabel">
        <span>{props.day}</span>
    </div>)
}

export default DayLabel;