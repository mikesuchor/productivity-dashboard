import React from 'react'
import './WeatherDay.css'

class WeatherDay extends React.Component {
    render() {
        return(
            <div>{this.props.day}</div>
        )
    }
    
}

export default WeatherDay