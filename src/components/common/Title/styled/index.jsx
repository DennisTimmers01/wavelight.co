import styled from 'styled-components';

export default styled.h1`
  ${p => p.withSubtitle && `margin-bottom: 0;`}
`