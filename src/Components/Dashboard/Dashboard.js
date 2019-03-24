import React from 'react'
import './Dashboard.css'
import Calendar from '../Calendar/Calendar'
import DateAndTime from '../DateAndTime/DateAndTime'
import TaskList from '../TaskList/TaskList'
import Weather from '../Weather/Weather'

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard">
          <TaskList />
          <Calendar />
          <div className="weather-and-date">
            <Weather />
            <DateAndTime />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard