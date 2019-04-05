import React from 'react'
import './TaskList.css'
import dateFns from 'date-fns'

class Tasks extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }
  }

  delete = (key) => {
    this.props.delete(key)
  }

  createTasks = (item) => {
    return (
      <li>
          <h4>{item.text}</h4>
          <p>{dateFns.format(new Date(), "MMMM D, YYYY")}</p>
          {/* <i class="far fa-calendar-alt"></i> */}
          <div>
            <i className="far fa-trash-alt" onClick={() => this.delete(item.key)} key={item.key}></i>
          </div>
      </li>
    )
  }
  
  render() {
    let todoEntries = this.props.entries
    let listItems = todoEntries.map(this.createTasks)
    
    return (
      <ul className='tasks'>
          {listItems}
      </ul>
    )
  }
}
  
export default Tasks