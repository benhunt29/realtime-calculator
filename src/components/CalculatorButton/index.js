import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FullWidthButton } from './styles'

class CalculatorButton extends Component {

  handleButtonClick = () => {

    const { handleClick, text } = this.props

    handleClick(text)
  }

  render () {
    const { text = '', size = 'large', variant = 'secondary', disabled = null, children } = this.props
    return (
      <FullWidthButton disabled={disabled} className={`${size} ${variant}`} onClick={this.handleButtonClick} >{children ||
         text}</FullWidthButton>
    )

  }

} 

CalculatorButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
}

export default CalculatorButton
