import React, {Component} from "react";
import "./MainCard.css";
import DayLabel from "../../components/DayLabel/DayLabel";
import WeatherImage from "../../components/WeatherImage/WeatherImage";
import Temperatures from "../Temperatures/Temperatures";


class MainCard extends Component {


    render(){
        return(<div className="mainCard">
               <DayLabel day={this.props.day}></DayLabel>
               <WeatherImage imageSrc={this.props.imageSrc}></WeatherImage>
               <Temperatures lowTemp={this.props.lowTemp} highTemp={this.props.highTemp}/>
        </div>)
    }
};


export default MainCard;