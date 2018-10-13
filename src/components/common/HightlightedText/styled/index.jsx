import styled from "styled-components";

export default styled.span`
  color: ${p => p.theme.colors[p.color] || p.theme.colors.primary};
`