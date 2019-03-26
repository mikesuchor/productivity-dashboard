import React from 'react'
import './DaysOfTheWeek.css'
import dateFns from 'date-fns'

class DaysOfTheWeek extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentDate: ""
    }
  }

  render() {
    return (
      <div className="daysoftheweek">
        {this.state.currentDate}
      </div>
    );
  }
}

export default DaysOfTheWeek