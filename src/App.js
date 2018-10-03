import React, { Component } from 'react'

import Layout from './components/Layout'
import CalculatorContainer from './containers/CalculatorContainer'
import CalculationsContainer from './containers/CalculationsContainer'

class App extends Component {
  render () {
    return (
      <Layout>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <CalculatorContainer />
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4'>
            <CalculationsContainer />
          </div>
        </div>
      </Layout>
    )
  }
}

export default App
