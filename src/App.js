import React, { Component } from 'react'
// import './App.css'
// import { AppWrapper } from './components/styles'
import { API_BASE_URL } from './constants'
import { get } from './services/requestService'
import { subscribe } from './services/pushserService'

import Layout from './components/Layout'
import CalculatorContainer from './containers/CalculatorContainer'

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
      <Layout>
        <CalculatorContainer />
      </Layout>
    )
  }
}

export default App
