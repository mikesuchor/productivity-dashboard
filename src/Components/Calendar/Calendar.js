import React from 'react'
import './Calendar.css'
import Date from './Date'
import Day from './Day'
import Month from './Month'

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
    }
  }

  render() {
    return (
      <div className="calendar">
        <Month  />
        <Day  />
        <Date />
      </div>
    );
  }
}

export default Calendar