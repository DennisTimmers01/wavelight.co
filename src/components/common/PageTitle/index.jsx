import React from 'react'
import HighlightedText from '../HightlightedText/styled'

const index = ({title, highlight}) => (
  <h1>{title}<HighlightedText>{highlight}</HighlightedText></h1>
)
export default index
