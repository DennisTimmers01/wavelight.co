import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container/styled'

const Header = ({children, ...props}) => (
  <Container as='header' {...props}>{children}</Container>
)

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header
