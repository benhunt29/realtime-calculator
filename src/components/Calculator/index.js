import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import CalculatorButton from '../CalculatorButton'
import { CurrentCalculation } from './styles'
import { validCalculation } from '../../helpers/validators'

class Calculator extends Component {

  constructor (props) {
    super(props)
    this.state = {
      calculation: '0',
      submitDisabled: true
    }
  }

  updateCalculation = (part = '') => {
    this.setState((prevState) => {
      const { calculation } = prevState
      const newCalculation = calculation === '0' && part !== '.' ? part : `${prevState.calculation}${part}`
      const submitDisabled = !validCalculation(newCalculation)
      console.log('SUBMIT DISABLED: ', submitDisabled)
      return {
        calculation: newCalculation,
        submitDisabled
      }
    })
  }

  clearCalculation = () => {
    this.setState({calculation: '0'})
  }

  submitCalculation = () => {
    this.props.submitCalculation(this.state.calculation)
  }

  render () {

    const { calculation, submitDisabled } = this.state;
    const { submitCalculation } = this.props;

    console.log(calculation)

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
          <div className='col-sm'>
            <CalculatorButton text='0' handleClick={this.updateCalculation} />
          </div>
          <div className='col-sm-4'>
            <CalculatorButton text='.' handleClick={this.updateCalculation} />
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
          <div className="col-sm-4">
            <CurrentCalculation>
              {calculation}
            </CurrentCalculation>
          </div>
          <div className="col-sm-1">
            <div className="row">
              <div className='col-sm-12'>
                <CalculatorButton text='clear' variant='inverse' handleClick={this.clearCalculation} />
              </div>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            {NumberPad}
          </div>
          <div className="col-sm-1">
            {Operators}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <CalculatorButton text='=' variant='primary' handleClick={this.submitCalculation} disabled={submitDisabled}></CalculatorButton>
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
