import React from "react";
import cityWeather from "../city-weather.json";

const CityList = () => {
  return (
    <div className="city-list">
      <ul>
        {cityWeather.map((city, index) => (
          <li key={index}>
            <h2>
              {city.name}, {city.sys.country}
            </h2>
            <h3> {city.weather[0].main} </h3>
            <h4> {city.weather[0].description} </h4>
            <p> min temp: {Math.round(city.main.temp_min - 273)} &#8451; </p>
            <p> max temp: {Math.round(city.main.temp_max - 273)} &#8451; </p>
            <p>
              location: {city.coord.lat}, {city.coord.lon}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
