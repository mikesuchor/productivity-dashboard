import React from 'react'
import './Date.css'

const moment = require('moment')

class Date extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentDate: moment().format('D')
    }
  }

  render() {
    return (
      <div className="date">
        {this.state.currentDate}
      </div>
    );
  }
}

export default Date