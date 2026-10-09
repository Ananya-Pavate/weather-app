import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox.jsx";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
         city:"Delhi",
        feelslike:24.84,
        temp:28,
        tempMin:25,
        tempMax:78,
        humidity:47,
        weather:"haze"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(<div className="weather-app">
        <header className="weather-header">
            <p className="weather-kicker">Weather made simple</p>
        <h1 className="weather-title">Weather App</h1>
        <p className="weather-subtitle">
            Discover temperature,humidity and weather conditions for any city
        </p>
        </header>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>)
}