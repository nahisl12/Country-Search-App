import React from 'react';
import Country from './Country';

const CountryList = ({ data, search, isCountry, setIsCountry, weather}) => {

  const renderCountry = () => {
    if(data.length > 10) {
      return(
       <div>Too many items</div>
      )
    } else if(data.length === 0) { 
      return (
        <div>Nothing found...</div>
      ) 
    } else if(data.length === 1) {
      return(
        data.map(item => {
          return(
          <div key={item.name}>
            <p>name: {item.name}</p>
            <p>capital: {item.capital}</p>
            <p>population: {item.population}</p>
            <p>langauges: {item.languages[0].name}</p>
            <img src={item.flag} alt="flag"/>
            <h3>Weather in {item.capital}</h3>
            <p>Temperature: {console.log('o')}</p>
          </div>
          )
        })
      )
    } else {
      return (
        data.map(item => {
          if(item.name.toLowerCase().includes(search.toLowerCase())) {
            return(
              isCountry ? <div>name: {item.name} capital: {item.capital} <button onClick={showPanel}>hide</button></div> :
                <div> 
                    {item.name} 
                    <button onClick={showPanel}>show</button>
                </div>
            )
          }
        })
      )
    }
  }

  const showPanel = () => {
    setIsCountry(!isCountry);
  }

  return (
    renderCountry()
  )
}

export default CountryList