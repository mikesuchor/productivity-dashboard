import React from 'react'
import dateFns from 'date-fns'
import './Month.css'

class Month extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentMonth: new Date()
    }
  }

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    })
  }

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    })
    
  }

  getDaysOfTheWeek = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="daysOfTheWeek-names" key={i}>
          {dateFns.format(dateFns.addDays(dateFns.startOfWeek(this.state.currentMonth), i), "ddd")}
        </div>
      );
    }
    return <div class="daysOfTheWeek">{days}</div>;
  }

  renderCells() {
    const currentMonth = this.state.currentMonth;
    const startDate = dateFns.startOfWeek(dateFns.startOfMonth(currentMonth));
    const endDate = dateFns.endOfWeek(dateFns.endOfMonth(dateFns.startOfMonth(currentMonth)));

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        days.push(
          <div
            className={`col cell ${!dateFns.isSameMonth(day, dateFns.startOfMonth(currentMonth)) ? "disabled" : ""}`}
            key={day}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  render() {
    return (
      <div>
        <div className="month">
          <button className="prevMonthBtn" onClick={this.prevMonth}><i className="fas fa-chevron-circle-left"></i></button>
          <h3 className="currentMonth">{dateFns.format(this.state.currentMonth, "MMMM YYYY")}</h3>
          <button className="nextMonthBtn" onClick={this.nextMonth}><i className="fas fa-chevron-circle-right"></i></button>
        </div>
        {this.renderCells()}
      </div>
    );
  }
}

export default Month