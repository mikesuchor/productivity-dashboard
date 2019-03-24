import React from 'react'
import './DateAndTime.css'

const moment = require('moment')

class DateAndTime extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentDate: moment().format('MMMM D, YYYY'),
      currentTime: moment().format('h:mm:ss a')
    }
  }

  timeUpdate = () => {
    this.setState({
        currentTime: moment().format('h:mm:ss a')
    })
  }

  componentDidMount() {
    setInterval(this.timeUpdate, 1000)
  }

  render() {
    return (
      <div className="dateandtime">
        <h2 className='currentDate'>{this.state.currentDate}</h2>
        <h2 className='currentTime'>{this.state.currentTime}</h2>
      </div>
    );
  }
}

export default DateAndTime