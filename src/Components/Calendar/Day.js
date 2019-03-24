import React from 'react'
import './Day.css'

const moment = require('moment')

class Day extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentDay: moment().format('dddd'),
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