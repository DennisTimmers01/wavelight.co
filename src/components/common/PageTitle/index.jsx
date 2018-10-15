import React from 'react'
import HighlightedText from '../HightlightedText/styled'

const index = ({ highlight, children }) => (
  <h1>
    {children}
    <HighlightedText>{highlight}</HighlightedText>
  </h1>
)
export default index
