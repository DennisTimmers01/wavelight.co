import styled from 'styled-components'

export default styled.span`
  color: ${p => p.theme.main[p.color] || p.theme.main.primary};
`
