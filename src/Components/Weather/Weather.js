import React from 'react'
import WeatherDay from './WeatherDay'
import './Weather.css'
import 'weather-icons/css/weather-icons.css'

class Weather extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      latitude: 0,
      longitude: 0,
      weather: ""
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
    const weatherapi = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4324ecbb9cad582bab9e7a19209570f6/"

    fetch(`${weatherapi}${latitude},${longitude}?units=auto`)
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
      
          <h3 className="weatherheader">Weather</h3>
          {this.state.weather
            ? <div className="weather-week">
                {console.log(this.state.weather.daily.data)}
                <WeatherDay day="0" weather={this.state.weather} />
                <WeatherDay day="1" weather={this.state.weather} />
                <WeatherDay day="2" weather={this.state.weather} />
                <WeatherDay day="3" weather={this.state.weather} />
                <WeatherDay day="4" weather={this.state.weather} />
                <WeatherDay day="5" weather={this.state.weather} />
                <WeatherDay day="6" weather={this.state.weather} />
              </div>
            : null
          }
      </div>
    )
  }
}

export default Weather