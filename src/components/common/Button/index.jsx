import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './styled'

const Button = ({value, ...props}) => (
  <StyledButton {...props}>{value}</StyledButton>
)

Button.propTypes = {
  value: PropTypes.string.isRequired
}

export default Button;