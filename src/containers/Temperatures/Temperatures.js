import React from "react";
import "./Temperatures.css";
import LowTemp from "../../components/LowTemp/LowTemp";
import HighTemp from "../../components/HighTemp/HighTemp";


const Temperatures = (props) => {
    return (
        <div className="temperaturesContainer">
            <HighTemp highTemp={props.highTemp}/>
            <LowTemp lowTemp={props.lowTemp}/>
        </div>
    )
}


export default Temperatures;