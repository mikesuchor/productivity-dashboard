import React from 'react'
import './TaskList.css'

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
      <li onClick={() => this.delete(item.key)} key={item.key}>
          {item.text}
          <i class="far fa-trash-alt"></i>
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