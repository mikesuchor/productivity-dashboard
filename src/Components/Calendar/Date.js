import React from 'react'
import './Date.css'
import dateFns from 'date-fns'

class Date extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currentDate: new Date()
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