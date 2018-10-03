import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { PreviousCalculationHeader } from './styles'
import Calculation from '../Calculation'

const Calculations = ({ calculations = [] }) => (
  <Fragment>
    <PreviousCalculationHeader>Previous Calculations</PreviousCalculationHeader>
    {calculations.map((calc, ind) => {
      return <Calculation key={`calc-${ind}`} calculation={calc.calculation} timestamp={calc.createdAt} />
    })}
  </Fragment>
)

Calculations.propTypes = {
  calculations: PropTypes.array
}

export default Calculations
