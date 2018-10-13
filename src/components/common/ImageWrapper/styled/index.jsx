import styled from 'styled-components'

export default styled.div`
  display: block;
  ${p => p.imageSize && `width: ${p.imageSize}`}
`