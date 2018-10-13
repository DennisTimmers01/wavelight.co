import styled from 'styled-components'

export default styled.div`
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: ${p => p.columnWidth || `100%`};
  }
`
