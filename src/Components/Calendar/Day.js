import React from 'react'
import './Day.css'

class Day extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentDay: ""
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