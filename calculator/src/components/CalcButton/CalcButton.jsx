import React from 'react'
import PropTypes from 'prop-types'
import './CalcButton.css'

const CalcButton = props => {
  return (
    <button className={'CalcButton ' + (props.className ? props.className : '')} onClick={props.onClick}> {props.children} </button>
  )
}

CalcButton.propTypes = {}

export default CalcButton