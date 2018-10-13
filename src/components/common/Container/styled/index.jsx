import styled, { css } from 'styled-components'

export default styled.div`
  padding-top: ${p => p.theme.sizes[p.paddingTop] || 0};
  padding-right: ${p => p.theme.sizes.md};
  padding-bottom: ${p => p.theme.sizes[p.paddingBottom] || 0};
  padding-left: ${p => p.theme.sizes.md};

  ${p =>
    p.withFlex &&
    css`
      display: flex;
      flex-flow: row wrap;
    `};

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    max-width: 780px;
  }
`
