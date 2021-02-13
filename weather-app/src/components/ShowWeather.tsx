import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getExtendedWeather} from '../actions/index'
import store from '../store/index'
import logo from '../logo.svg'
import './weather.css'

const ShowWeather: any = (weatherObj:any) => {

     const fahrenheit = (weatherObj.data.main.temp * 1.8 - 459.67).toFixed(2);
     const celsius = (weatherObj.data.main.temp - 273.15).toFixed(2);

     const pos = useSelector((state: any) => state.weather.position);
    //const lat = useSelector((state: any) => state.weather.position[1]);
    let lon = 0
    let lat = 0
    if(pos){
         lon = pos[0];
         lat = pos[1];
        console.log("lon:::::::", lon, "\nlat::::::::", lat);
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExtendedWeather(lon, lat))
    }, []);

    //  //const [extendedWeather, setExtendedWeather] = ('');
    // console.log('weatherObj.dataaaaaaaaaaaaaaa', weatherObj.data.weatherObj.data.main)

    return(
        <div>
            
            <h3>{weatherObj.data.name} - {weatherObj.data.sys.country}</h3>
            <p>{weatherObj.data.weather[0].description}</p>
            <p>
                <img src={`http://openweathermap.org/img/wn/${weatherObj.data.weather[0].icon}.png`} alt="" />
            </p>
            <p>temp</p>
            <p>{weatherObj.data.main.temp}K</p>
            <p>{fahrenheit}<sup>&#8457;</sup></p>
            <p>{celsius}<sup>&#8451;</sup></p>
            <p>humidity: {weatherObj.data.main.humidity}</p>
            <p>pressure: {weatherObj.data.main.pressure}</p>
            <p>wind: {weatherObj.data.wind.speed} m/s</p>

        </div>
    );
}

export default ShowWeather;