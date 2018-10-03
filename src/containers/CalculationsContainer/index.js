import React, { Component } from 'react'

import { API_BASE_URL } from '../../constants'
import { get } from '../../services/requestService'
import { subscribe } from '../../services/pusherService'
import Calculations from '../../components/Calculations'

class CalculationsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      calculations: []
    }
  }

  componentDidMount () {
    get(`${API_BASE_URL}/calculations`, { method: 'GET' })
      .then((resp) => {
        this.setState({calculations: resp.calculations})
      })
      .catch((err) => {
        console.log(err)
      })
    subscribe('calculations', 'calculations-update', data => {
      this.setState({calculations: data})
    })
  }

  render () {
    const { calculations } = this.state

    return <Calculations calculations={calculations} />
  }
}

export default CalculationsContainer
