import React from 'react'
import HighlightedText from '../HightlightedText/styled'

const PageTitle = ({ highlight, children }) => (
  <h1>
    {children}
    <HighlightedText>{highlight}</HighlightedText>
  </h1>
)

export default PageTitle
