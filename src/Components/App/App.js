import React from 'react'
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default App