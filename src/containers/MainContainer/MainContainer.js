import React, { Component } from "react";
import MainCard from "../MainCard/MainCard";
import Sun from "../../assets/sun.png";
import Rain from "../../assets/rain.png";
import Cloudy from "../../assets/cloudy.png";
import SearchCityForm from "../../components/SearchCityForm/SearchCityForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./MainContainer.css";


class MainContainer extends Component {
    state = {
        currentCity: "Stockholm",
        data: [],
        valueCity: "",
        failedToFind: false
    }

    componentDidMount() {
        this.fetchData(this.state.currentCity);

    }

    onHandleCityChange = city => {
        this.fetchData(city);
        this.setState({ currentCity: city });
    }

    handleInputChange = (event) => {
        this.setState({ valueCity: event.target.value });
    }

    onSubmitCityForm = event => {
        event.preventDefault();
        this.fetchData(this.state.valueCity);
        this.setState({ currentCity: this.state.valueCity, valueCity: "" });
    }


    fetchData = city => {
        fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q=" + city, {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
                "X-RapidAPI-Key": "becfe1f159msh9ea62d2bcde02c5p178026jsn758bf79aeaa4"
            }
        })
            .then(response => {
                if (response.status !== 200) {
                    this.setState({ failedToFind: true })
                    return;
                }
                return response.json()
            })
            .then(data =>
                this.setState({ data: data.list, failedToFind: false })
            ).catch(err => err);

    }


    render() {

        let filteredData;
        let minTempOfDay;
        let mainCardsArr;
        if (this.state.failedToFind) {
            mainCardsArr = <ErrorMessage />
        }
        else {
            filteredData = this.state.data.filter(day => {
                let date = new Date(day.dt_txt);
                let hour = date.getHours();
                return hour === 12;
            });

            minTempOfDay = this.state.data.filter(day => {
                const date = new Date(day.dt_txt);
                const hour = date.getHours();
                return hour === 21;
            }).map(day => {
                return day.main.temp_min;
            });

            mainCardsArr = filteredData.map((day, index) => {
                let imgVal = Sun;
                let date = new Date(day.dt_txt);
                let dayName = "";
                dayName = date.toLocaleDateString("en-en", { weekday: "short" });
                if (day.weather[0].main.includes("Clouds")) {
                    imgVal = Cloudy;
                }
                else if (day.weather[0].main.includes("Rain")) {
                    imgVal = Rain;
                }
                return <MainCard
                    key={index}
                    day={dayName}
                    imageSrc={imgVal}
                    lowTemp={(minTempOfDay[index] - 273.15).toFixed(0)}
                    highTemp={(day.main.temp_max - 273.15).toFixed(0)}
                />
            })
        }

        return (<>
            <h2 className="title">Weather for {this.state.currentCity}</h2>
            <div className="mainContainer">
                {mainCardsArr}
            </div>
            <SearchCityForm
                city={this.state.valueCity}
                onSubmitCityForm={event => this.onSubmitCityForm(event)}
                handleInputChange={event => this.handleInputChange(event)}
            />
        </>)
    }
}


export default MainContainer;