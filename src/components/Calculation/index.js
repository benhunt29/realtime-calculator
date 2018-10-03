import React from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

const Calculation = ({calculation = '', timestamp = ''}) => {
  return (
    <div className='row section'>
      <div className='col-sm-offset-1 col-sm-5'>
        {calculation}
      </div>
      <div className='col-sm-offset-1 col-sm-5'>
        {format(timestamp, 'MMM D h:mm a')}
      </div>
    </div>
  )
}

Calculation.propTypes = {
  calculation: PropTypes.string,
  timestamp: PropTypes.string
}

export default Calculation
