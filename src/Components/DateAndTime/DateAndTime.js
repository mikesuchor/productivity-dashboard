import React from 'react'
import './DateAndTime.css'
import dateFns from 'date-fns'

class DateAndTime extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentDate: new Date(),
      currentTime: new Date()
    }
  }

  timeUpdate = () => {
    this.setState({
        currentTime: dateFns.addSeconds(this.state.currentTime, 1)
    })
  }

  componentDidMount() {
    setInterval(this.timeUpdate, 1000)
  }

  render() {
    return (
      <div className="dateandtime">
        <h2 className='currentDate'>{dateFns.format(this.state.currentDate, "MMMM D, YYYY")}</h2>
        <h2 className='currentTime'>{dateFns.format(this.state.currentTime, "h:mm:ss a")}</h2>
      </div>
    );
  }
}

export default DateAndTime