import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FullWidthButton } from './styles'

class CalculatorButton extends Component {

  handleButtonClick = () => {

    const { handleClick, text } = this.props

    handleClick(text)
  }

  // handleKeyPress = (e) => {
  //   console.log(e.key)
  // }

  render () {
    const { text = '', size = 'large', variant = 'secondary', disabled = null } = this.props
    console.log('DISABLED: ',  disabled)
    return (
      <FullWidthButton disabled={disabled} className={`${size} ${variant}`} onClick={this.handleButtonClick} >{text}</FullWidthButton>
    )

  }

} 

CalculatorButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool
}

export default CalculatorButton
