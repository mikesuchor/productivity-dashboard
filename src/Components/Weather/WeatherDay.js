import React from 'react'
import './WeatherDay.css'

class WeatherDay extends React.Component {
    render() {
        const weatherIcon = () => {
            switch(this.props.weather.daily.data[this.props.day].icon) {
                case "clear-day":
                    return("wi wi-day-sunny")
                case "clear-night":
                    return("wi wi-night-clear")
                case "partly-cloudy-day":
                    return("wi wi-day-cloudy")
                case "partly-cloudy-night":
                    return("wi wi-night-alt-cloudy")
                case "cloudy":
                    return("wi wi-cloudy")
                case "rain":
                    return("wi wi-rain")
                case "sleet":
                    return("wi wi-sleet")
                case "snow":
                    return("wi wi-snow")
                case "wind":
                    return("wi wi-cloudy-gusts")
                case "fog":
                    return("wi wi-fog")
                default:
                    return("wi wi-na")
            }
        }

        return(
            <div className="weather_day">
                {console.log(this.props.weather)}
                <i className={weatherIcon()}></i>
                <p class="temperatures temphigh">{Math.round(this.props.weather.daily.data[this.props.day].temperatureHigh)}&deg;C</p>
                <p class="temperatures templow">{Math.round(this.props.weather.daily.data[this.props.day].temperatureLow)}&deg;C</p>
            </div>
        )
    }
    
}

export default WeatherDay