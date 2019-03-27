import React from 'react'
import './Calendar.css'
import Day from './Day'
import DaysOfTheWeek from './DaysOfTheWeek'
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
        <Month />
        <DaysOfTheWeek />
        <Day />
      </div>
    );
  }
}

export default Calendar