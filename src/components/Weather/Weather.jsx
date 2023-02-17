import React, { useState } from 'react';
import axios from 'axios';
import { WeatherInfo } from '../WeatherInfo/WeatherInfo';
import { Form, SearchField, SearchBtn } from './Weather.styled';

export function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.cityForSearch);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      weatherType: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    searchCity();
  };

  const handleCityChange = event => {
    setCity(event.target.value);
  };

  function searchCity() {
    const apiKey = '459eb898914d2b1561006ac93c82eeda';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <SearchField
            type="search"
            placeholder="Enter a city"
            onChange={handleCityChange}
          />
          <SearchBtn type="submit" value="Search" />
        </Form>
        <WeatherInfo info={weatherData} />
      </div>
    );
  } else {
    searchCity();
    return 'loading.....';
  }
}
