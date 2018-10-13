import styled, {css} from 'styled-components';

export default styled.button`
  padding-top: ${p => p.theme.sizes.xs};
  padding-right: ${p => p.theme.sizes.md};
  padding-bottom: ${p => p.theme.sizes.xs};
  padding-left: ${p => p.theme.sizes.md};
  margin-bottom: ${p => p.theme.sizes.sm};
  color: ${p => p.theme.colors.primary};
  background: ${p => p.theme.colors.white};
  border: 3px solid ${p => p.theme.colors.primary};
  
  &:hover {
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.primary};
  };

  ${p => p.inverted && css`
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.primary};

    &:hover {
      color: ${p => p.theme.colors.primary};
      background: ${p => p.theme.colors.white};
    }
  `}
`