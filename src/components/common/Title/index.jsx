import React from 'react'
import PropTypes from 'prop-types'

import StyledTitle from './styled'
import HighlightedText from '../HightlightedText/styled'

const Title = ({ title, subTitle, element, ...props }) => (
  <>
    {title && (
      <StyledTitle as={element} {...props}>
        {title}
      </StyledTitle>
    )}
    {subTitle && <HighlightedText>{subTitle}</HighlightedText>}
  </>
)

Title.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
}

export default Title
