import React from 'react';

const ShowWeather: any = (weatherObj:any) => {
     const fahrenheit = (weatherObj.data.main.temp * 1.8 - 459.67).toFixed(2);
     const celsius = (weatherObj.data.main.temp - 273.15).toFixed(2);

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
    )
}

export default ShowWeather;