import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import CalculatorButton from '../CalculatorButton'
import { CurrentCalculation } from './styles'
import { validCalculation, isOperator } from '../../helpers/validators'
import { backspace } from '../../icons'

class Calculator extends Component {

  constructor (props) {
    super(props)
    this.state = {
      calculation: '0',
      submitDisabled: true,
      operatorsDisabled: false
    }
  }

  updateCalculation = (part = '') => {
    this.setState((prevState) => {
      const { calculation } = prevState
      let newCalculation = `${calculation}${part}`
      if (isOperator(calculation.substr(-1)) && isOperator(part)) {
        newCalculation = calculation
      } else if (calculation === '0' && part !== '.') {
        newCalculation = part
      }
      return {
        calculation: newCalculation,
        submitDisabled: !validCalculation(newCalculation)
      }
    })
  }

  clearCalculation = () => {
    this.setState({calculation: '0', submitDisabled: true})
  }

  backspaceClick = () => {
    this.setState((prevState => {
      const { calculation: currentCalc } = prevState

      const newCalc = currentCalc.substr(0, currentCalc.length - 1) || '0'
      const submitDisabled = newCalc === '0' || !validCalculation(newCalc)
      return {
        calculation: newCalc,
        submitDisabled
      }
    }))
  }

  submitCalculation = () => {
    const solution = this.props.submitCalculation(this.state.calculation)
    this.setState({calculation: solution.toString()})
  }

  render () {

    const { calculation, submitDisabled } = this.state;

    const NumberPad = (
      <Fragment>
        <div className='row'>
          <div className='col-sm-4'>
            <CalculatorButton text='7' handleClick={this.updateCalculation} />
          </div>
          <div className='col-sm-4'>
            <CalculatorButton text='8' handleClick={this.updateCalculation} />
          </div>
          <div className='col-sm-4'>
            <CalculatorButton text='9' handleClick={this.updateCalculation} />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <CalculatorButton text='4' handleClick={this.updateCalculation} />
          </div>
          <div className='col-sm-4'>
            <CalculatorButton text='5' handleClick={this.updateCalculation} />
          </div>
          <div className='col-sm-4'>
            <CalculatorButton text='6' handleClick={this.updateCalculation} />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <CalculatorButton text='1' handleClick={this.updateCalculation} />
          </div>
          <div className='col-sm-4'>
            <CalculatorButton text='2' handleClick={this.updateCalculation} />
          </div>
          <div className='col-sm-4'>
            <CalculatorButton text='3' handleClick={this.updateCalculation} />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <CalculatorButton text='0' handleClick={this.updateCalculation} />
          </div>
          <div className='col-sm-4'>
            <CalculatorButton text='.' handleClick={this.updateCalculation} />
          </div>
          <div className='col-sm-4'>
            <CalculatorButton text='=' variant='primary' handleClick={this.submitCalculation} disabled={submitDisabled}></CalculatorButton>
          </div>
        </div>
      </Fragment>
    )

    const Operators = (
      <Fragment>
      	<div className="row">
      	  <div className='col-sm-12'>
      	      <CalculatorButton text='*' variant='tertiary' handleClick={this.updateCalculation} />
      	  </div>
      	</div>
      	<div className="row">
      	  <div className='col-sm-12'>
      	      <CalculatorButton text='/' variant='tertiary' handleClick={this.updateCalculation} />
      	  </div>
      	</div>
      	<div className="row">
      	  <div className='col-sm-12'>
      	    <CalculatorButton text='+' variant='tertiary' handleClick={this.updateCalculation} />
      	  </div>
      	</div>
      	<div className="row">
      	  <div className='col-sm-12'>
      	      <CalculatorButton text='-' variant='tertiary' handleClick={this.updateCalculation} />
      	  </div>
      	</div>
      </Fragment>
    )

    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-10">
            <CurrentCalculation>
              {calculation}
            </CurrentCalculation>
          </div>
          <div className="col-sm-2">
          <div className="row">
            <div className="col-sm-12">
              <CalculatorButton variant='tertiary' handleClick={this.backspaceClick}>{backspace}</CalculatorButton>
            </div>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10">
            {NumberPad}
          </div>
          <div className="col-sm-2">
            {Operators}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <CalculatorButton text='clear' variant='inverse' handleClick={this.clearCalculation} />
          </div>
        </div>
      </Fragment>
    )
  }
}

Calculator.propTypes = {
  submitCalculation: PropTypes.func
}

export default Calculator
