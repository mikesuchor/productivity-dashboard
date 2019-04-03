import React from 'react'
import './Weather.css'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      latitude: 0,
      longitude: 0,
      weather: {}
    }
  }

  componentDidMount() {
    if (window.navigator.geolocation) { 
      navigator.geolocation.getCurrentPosition((position) => {
        this.getWeatherData(position.coords.latitude, position.coords.longitude)
      })
    }
  }

  getWeatherData(latitude, longitude) {
    const weatherapi = "https://fcc-weather-api.glitch.me/api/current?"

    fetch(`${weatherapi}lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          latitude,
          longitude,
          weather: data
        })
      })
  }
  
  render() {
    return (
      <div className="weather">
        <h3>Weather</h3>
        {console.log(this.state.weather.main.temp)}
      </div>
    );
  }
}

export default Weather