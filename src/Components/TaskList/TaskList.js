import React from 'react'
import './TaskList.css'
import Tasks from './Tasks'

class TaskList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  addItem = (event) => {
    let itemArray = this.state.items

    if (this._inputElement.value !== '') {
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      )

      this.setState({
        items: itemArray
      })

      this._inputElement.value = ''
      this._inputElement.focus()
    }
    event.preventDefault()
  }

  deleteItem = (key) => {
    let filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key)
    })

    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
      <div className='tasklist'>
        <div className='header'>
          <form onSubmit={this.addItem}>
            <input ref={(input) => this._inputElement = input}
              placeholder='enter task'>
            </input>
            <button type='submit'>Add Task</button>
          </form>
        </div>
        <Tasks entries={this.state.items}
                  delete={this.deleteItem}/>
      </div>
    )
  }
}

export default TaskList