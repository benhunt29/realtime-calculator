import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { API_BASE_URL } from './constants'
import { get } from './services/requestService'
import { subscribe } from './services/pushserService'

class App extends Component {
  componentDidMount () {
    get(`${API_BASE_URL}/calculations`, { method: 'GET' })
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })
    subscribe('calculations', 'calculations-update', data => {
      console.log('DATA: ', data)
    })
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
