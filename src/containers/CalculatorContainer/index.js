import React, { Component } from 'react'
import Calculator from '../../components/Calculator'

class CalculatorContainer extends Component {
  submitCalculation = (calculation) => {
    console.log(this)
  }

  render () {
    return <Calculator submitCalculation={this.submitCalculation} />
  }
}

export default CalculatorContainer