import React, { Component } from 'react'
import Calculator from '../../components/Calculator'
import { calculate } from '../../helpers/calculator'
import { API_BASE_URL } from '../../constants'
import { post } from '../../services/requestService'

class CalculatorContainer extends Component {
  submitCalculation = (calculation) => {
    const solution = calculate(calculation)
    post(`${API_BASE_URL}/calculations`, {body: {
      calculation: `${calculation}=${solution}`
    }})
    return solution
  }

  render () {
    return <Calculator submitCalculation={this.submitCalculation} />
  }
}

export default CalculatorContainer