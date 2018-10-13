import React from 'react'
import HighlightText from '../HightlightedText/styled'

const Intro = ({content}) => {
  return (
    <HighlightText color="primaryLight">
      {content}
    </HighlightText>
  )
}

export default Intro
