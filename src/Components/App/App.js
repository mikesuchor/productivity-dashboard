import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import Navbar from '../Navbar/Navbar'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App