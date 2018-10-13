import React from 'react'
import PropTypes from 'prop-types'

import StyledTitle from './styled'
import HighlightedText from '../HightlightedText/styled'

const Title = ({title, subTitle, element, ...props}) => {
  const HTMLelement = element || 'h1';
  return (
    <>
      {title && <StyledTitle as={HTMLelement} {...props}>{title}</StyledTitle>}
      {subTitle && <HighlightedText>{subTitle}</HighlightedText>}
    </>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default Title
