import styled from 'styled-components'

export default styled.div`
  padding-top: ${p => p.theme.sizes[p.paddingTop] || 0};
  padding-right: ${p => p.theme.sizes.md};
  padding-bottom: ${p => p.theme.sizes[p.paddingBottom] || 0};
  padding-left: ${p => p.theme.sizes.md};
`