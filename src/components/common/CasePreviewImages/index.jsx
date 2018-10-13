import React from 'react'

import Wrapper from './styled/Wrapper'

const CasePreviewImages = ({background, foreground}) => {

  return (
    <Wrapper>
      <img src={background} alt=""/>
      <img src={foreground} alt=""/>
    </Wrapper>
  )
}

CasePreviewImages.propTypes = {

}

export default CasePreviewImages
