import React from 'react'
import './Day.css'
import dateFns from 'date-fns'

class Day extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentDay: new Date()
    }
  }

  render() {
    return (
      <div className="day">
        {this.state.currentDay}
      </div>
    );
  }
}

export default Day