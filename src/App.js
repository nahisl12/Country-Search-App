import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryList from './components/CountryList';
import Country from './components/Country';

function App() {
  const weatherApiKey = process.env.REACT_APP_API_KEY;

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [isCountry, setIsCountry] = useState(false);
  const [weatherData, setWeatherData] = useState([{}]);
  const [temp, setTemp] = useState();


  // country api
  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(`https://restcountries.eu/rest/v2/name/${search}`);
      setData(result.data);
    }

    getData();
  }, [search]);

  // Weather api
  useEffect(() => {
    const getWeather = async () => {
      const res = await axios(`http://api.weatherstack.com/current?access_key=${weatherApiKey}&query=${search}`);
      setWeatherData(res.data);
      // setTemp(weatherData.current.temp)
    }
    getWeather();
  }, [search]);

  const onSearchInput = (event) => {
    setSearch(event.target.value);    
  }

  return (
    <>
      <div>search: <input value={search} onChange={onSearchInput} /></div>
      <CountryList data={data} weather={weatherData} search={search} isCountry={isCountry} setIsCountry={setIsCountry}/>
    </>
  );
}

export default App;
