import React from 'react'
import './Month.css'
import dateFns from 'date-fns'

class Month extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentMonth: new Date()
    }
  }

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
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