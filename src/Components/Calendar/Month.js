import React from 'react'
import './Month.css'

const moment = require('moment')

class Month extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentMonth: moment().format('MMMM')
    }
  }

  prevMonth = () => {
    this.setState({
      currentMonth: moment().subtract(1, 'month')
    })
  }

  nextMonth = () => {
    this.setState({
      currentMonth: moment().add(1, 'month')
    })
  }

  render() {
    return (
      <div className="month">
        {this.state.currentMonth}
        <button className="prevMonthBtn" onClick={this.prevMonth}>L</button>
        <button className="nextMonthBtn" onClick={this.nextMonth}>R</button>
      </div>
    );
  }
}

export default Month