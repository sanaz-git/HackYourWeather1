import React from "react";
import cityWeather from "../city-weather.json";

const CityList = () => {
  return (
    <div className="city-list">
      {cityWeather.map((city, index) => (
        <div>
          <h3 key={index}>
            {city.name}, {city.sys.country}
          </h3>

          <span> temp: {Math.round(city.main.temp - 273)} &#8451; </span>
        </div>
      ))}
    </div>
  );
};

export default CityList;
