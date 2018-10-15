import styled, { css } from 'styled-components'

export default styled.button`
  position: relative;
  padding-top: ${p => p.theme.sizes.xs};
  padding-right: ${p => p.theme.sizes.lg};
  padding-bottom: ${p => p.theme.sizes.xs};
  padding-left: ${p => p.theme.sizes.lg};
  margin-bottom: ${p => p.theme.sizes.sm};
  color: ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.white};
  border-radius: 30px;
  transition: all 150ms ease-in-out;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    border-radius: 30px;

    box-shadow: 0px 2px 2px rgba(61, 118, 234, 0.2),
      0px 4px 4px rgba(61, 118, 234, 0.4), 0px 8px 8px rgba(61, 118, 234, 0.2),
      0px 8px 8px rgba(61, 118, 234, 0.2), 0px 16px 16px rgba(61, 118, 234, 0.2),
      0px 32px 32px rgba(61, 118, 234, 0.2);
    transition: opacity 150ms ease-in-out;
  }

  &:hover {
    &:before {
      opacity: 1;
    }
  }

  ${p =>
    p.inverted &&
    css`
      color: ${p => p.theme.colors.white};
      background: ${p => p.theme.colors.primary};
    `};
`
